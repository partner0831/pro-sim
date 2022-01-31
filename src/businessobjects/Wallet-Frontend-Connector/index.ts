// /opt/homebrew/bin/openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./ --skip-validate-spec
import { useEffect, useState } from 'react';

import {
  BehaviorSubject,
  Subscription
} from 'rxjs'
import axios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig
} from 'axios';
import {
  UserApi,
  ChatApi,
  StickerApi,
  SuperAdminApi,
  WalletApi,
  PhysicalWalletApi,
  // TipseeApi,
  // VenueApi,
} from "./api/api"
export * from './api/api'

const TIMEOUT = 30000

export enum API_ERROR_SEVERITY { INFO, WARNING, ERROR }
export type API_ERROR = { message: string, severity: API_ERROR_SEVERITY }

const Logger = new BehaviorSubject<null | API_ERROR>(null)
export function subscribeLogger(action: (log: null | API_ERROR) => void): Subscription {
  return Logger.subscribe(action)
}

function log(message: string, severity: API_ERROR_SEVERITY = API_ERROR_SEVERITY.INFO) {
  Logger.next({
    message: message,
    severity: severity
  })
}

const Loading = new BehaviorSubject<boolean>(false)
export function subscribeLoading(action: (loading: boolean) => void): Subscription {
  return Loading.subscribe(action)
}

export function useLoading() {
  const [loading, set_loading] = useState(false)

  useEffect(() => {
    const subscription = subscribeLoading((loading: boolean) => { set_loading(loading) })
    return () => subscription.unsubscribe()
  }, [])

  return loading
}


const Response = new BehaviorSubject<null | AxiosResponse<any>>(null)
export function subscribeResponse(action: (response: null | AxiosResponse<any>) => void): Subscription {
  return Response.subscribe(action)
}

export type ApiResult = {
  code: number;
  message: string;
  result?: any | null;
}

const SESSIONTOKEN_KEY = 'Authorization'
let sessionToken: undefined | string

export let userApi: UserApi
export let chatApi: ChatApi
export let stickerApi: StickerApi
export let superAdminApi: SuperAdminApi
export let walletApi: WalletApi
export let physicalWalletApi: PhysicalWalletApi

let axiosInstance: AxiosInstance
let globalApiServer: string

export function init(apiServer: string, timeout: number = TIMEOUT) {
  log('init the api')
  globalApiServer = apiServer
  axiosInstance = createAxios(apiServer, timeout)

  userApi = new UserApi(undefined, apiServer, axiosInstance)
  chatApi = new ChatApi(undefined, apiServer, axiosInstance)
  stickerApi = new StickerApi(undefined, apiServer, axiosInstance)
  superAdminApi = new SuperAdminApi(undefined, apiServer, axiosInstance)
  walletApi = new WalletApi(undefined, apiServer, axiosInstance)
  physicalWalletApi = new PhysicalWalletApi(undefined, apiServer, axiosInstance)
}

export async function sendFormData(endpoint: string, data: FormData): Promise<AxiosResponse<ApiResult>> {
  if (axiosInstance == undefined || sessionToken == undefined || globalApiServer == undefined) return {
    data: {
      code: -1,
      message: 'axiosInstance == undefined || sessionToken == undefined || globalApiServer == undefined',
    }
  } as AxiosResponse<ApiResult>

  data.append('sessionToken', sessionToken)

  let sendWhat = ''
  data.forEach((value: FormDataEntryValue, key: string) => {
    sendWhat = sendWhat + `[${key}: ${value}], `
  })
  log(`sendFormData, ${endpoint} ${sendWhat}`)

  return axiosInstance.post(globalApiServer + endpoint, data, { headers: { 'Content-Type': 'multipart/form-data' } })
}

export async function post(url: string, data: any): Promise<AxiosResponse<any>> {
  return axiosInstance.post(url, data)
}
export async function get(url: string, params: Object): Promise<AxiosResponse<any>> {
  return axiosInstance.get(url, {
    params: params
  } as AxiosRequestConfig)
}

export async function createSession(
  apiKey: string,
  getCache?: () => null | string,
  setCache?: (token: string) => void,
  restoreCaches?: () => void,
): Promise<boolean> {
  invalidateSession()

  if (getCache != undefined) {
    const cachedToken = getCache()
    if (cachedToken != undefined && cachedToken != '') {
      sessionToken = cachedToken
      axiosInstance.defaults.headers.common[SESSIONTOKEN_KEY] = sessionToken

      if (restoreCaches != undefined) restoreCaches()
      log(`use cached session, ${sessionToken}`)
      return true
    }
  }
  log(`create the session, ${userApi}`)

  const response = await userApi.createSession({ apiKey: apiKey })
  if (response.data.code == 0) {
    sessionToken = response.data.result?.token
    axiosInstance.defaults.headers.common[SESSIONTOKEN_KEY] = sessionToken

    if (setCache != undefined) setCache(sessionToken!)

    log(`sessionToken, ${sessionToken}`)

    return true
  }
  else {
    log('sessionToken failed', API_ERROR_SEVERITY.ERROR)

    return false
  }
}

export function invalidateSession() {
  sessionToken = undefined
}

function createAxios(apiServer: string, timeout: number): AxiosInstance {
  log('create axios instance')

  const axiosInstance = axios.create({
    baseURL: apiServer,
    headers: {
      Accept: 'application/json',
    },
  })

  axiosInstance.defaults.timeout = timeout
  axiosInstance.defaults.validateStatus = (status) =>
    (status >= 200 && status < 300) || status === 404

  axiosInstance
    .interceptors
    .response
    .use(
      (response) => {
        Loading.next(false)
        log(`API response ${JSON.stringify(response)}`)
        Response.next(response)
        return response
      },
      (error) => {
        Loading.next(false)
        log(`API error ${JSON.stringify(error.response)}`, API_ERROR_SEVERITY.ERROR)
        let response: AxiosResponse<{ code: number, message?: string }>

        if (error.message == 'Network Error') {
          response = {
            data: {
              code: -1,
              message: error.message
            },
            status: 0,
            statusText: '',
            headers: '',
            config: {}
          }
        }
        else {
          response = {
            data: {
              code: error.response?.status,
              message: error.response?.data.message
            },
            status: 0,
            statusText: '',
            headers: '',
            config: {}
          }
        }
        Response.next(response)
        return response

      }
    )

  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    Loading.next(true)

    if (sessionToken != undefined && sessionToken != '') {
      if (config.method == 'post') {
        switch (config.headers['Content-Type']) {
          case 'application/json':
            const data = config.data != undefined
              ? JSON.parse(config.data)
              : {}

            data['sessionToken'] = sessionToken
            config.data = JSON.stringify(data)
            break
          case 'multipart/form-data':
            break
        }
      }
      else {
        config.url = config.url!.replace('sessionToken=', '')
        config.params = {
          'sessionToken': sessionToken,
          ...config.params,
        }
      }
    }

    log(`API request ${JSON.stringify(config)}`)

    return config;
  })

  return axiosInstance
}


