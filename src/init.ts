import { BehaviorSubject, Subscription } from 'rxjs'
import {
    init as apiInit,
    invalidateSession,
    createSession,
    subscribeLogger,
    subscribeResponse,
    API_ERROR,
    API_ERROR_SEVERITY,
} from './businessobjects/Wallet-Frontend-Connector'
import { init as i18nInit } from 'businessobjects/Language'
import { subscribeUserInfo, logout } from 'businessobjects/User'
import { logging } from 'utils/Common';
import { getAPIVersion, getPortalVersion } from 'businessobjects/System'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const InitReady = new BehaviorSubject<boolean>(false)
export function subscribeInitReady(action: (ready: boolean) => void): Subscription {
    return InitReady.subscribe(action)
}

export const apikey = 'c1d2f1b8-0095-442a-9393-ab3bd751a2d8'

export async function init() {
    Sentry.init({
        dsn: "https://d08c3f8c80cd454f8b14b7d4ecd3a1cd@o501969.ingest.sentry.io/5955639",
        integrations: [new Integrations.BrowserTracing()],

        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control

        // tracesSampleRate: 1.0,

        beforeBreadcrumb(breadcrumb, hint) {
            if (breadcrumb.category === 'console') {
                return null
            }
            return breadcrumb
        },

    });


    subscribeLogger((l: null | API_ERROR) => {
        switch (l?.severity) {
            case API_ERROR_SEVERITY.INFO: logging(l?.message); break
            case API_ERROR_SEVERITY.WARNING: logging(l?.message); break
            case API_ERROR_SEVERITY.ERROR: logging(l?.message); break
        }
    })
    subscribeResponse(response => {
        switch (response?.data.code) {
            case 1000: // invalid session
                invalidateSession()
                createSession(apikey)
                break;
            case 1300: // user not logged in
                logout()
                break
        }
    })
    apiInit('')
    await createSession(apikey)
    await i18nInit()
    logging(`starting admin portal ${getPortalVersion()}, api: ${(await getAPIVersion()).result}`)


    subscribeUserInfo(async (value) => {
        if (value != null) {
            await Promise.all([
            ])
        }
    })


    InitReady.next(true)
}