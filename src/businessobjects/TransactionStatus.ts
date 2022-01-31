import { Subject, Subscription } from "rxjs";
import { AxiosResponse } from "axios";
import { ApiResult } from "./Wallet-Frontend-Connector";
import { logging } from "utils/Common";

import { ApplicationErrors, niceError } from "./ApplicationErrors";
import { ServerReturnCodes } from "./ServerReturnCodes";

export { ApplicationErrors, niceError };
export { ServerReturnCodes };

export class TransactionStatusType {
  code: ApplicationErrors = ApplicationErrors.None;
  message: string = "";
  resultCount?: number;
  success() {
    return this.code === ApplicationErrors.None;
  }
  fail() {
    return !this.success();
  }
}
export type TransactionStatusReturn<T> = TransactionStatusType & {
  result?: T;
};
export type TransactionPromise<T> = Promise<TransactionStatusReturn<T>>;

const TransactionStatus = new Subject<TransactionStatusType>();
export function subscribeTransactionStatus(
  action: (transaction: TransactionStatusType) => void
): Subscription {
  return TransactionStatus.subscribe(action);
}

// Generic statusses ***********************************************************************
export function internalError<T>(
  error: ApplicationErrors,
  message: string = "",
  result?: T
): TransactionStatusReturn<T> {
  const err = new TransactionStatusType();
  err.code = error;
  err.message = message;
  return { ...err, success: err.success, fail: err.fail, result: result };
}

export function returnError<T>(
  error: ApplicationErrors,
  message: string = "",
  resultCount?: number,
  result?: T
): TransactionStatusReturn<T> {
  logging(`Application error logged: ${error}, ${message}`);

  const err = internalError(error, message, result);
  TransactionStatus.next(err);
  return {
    ...err,
    success: err.success,
    fail: err.fail,
    result: result,
    resultCount: resultCount,
  };
}

export function returnSuccess<T>(
  result?: T,
  resultCount?: number
): TransactionStatusReturn<T> {
  const err = new TransactionStatusType();
  TransactionStatus.next(err);
  return {
    ...err,
    success: err.success,
    fail: err.fail,
    result: result,
    resultCount: resultCount,
  };
}

export function returnStatus<T>(
  code: ApplicationErrors,
  message?: string,
  resultCount?: number,
  result?: T
): TransactionStatusReturn<T> {
  if (code === ApplicationErrors.None)
    return returnError<T>(code, message, resultCount, result);
  else return returnSuccess<T>(result, resultCount);
}

// User related ***********************************************************************
export function returnErrorUser<T>(
  message: string
): TransactionStatusReturn<T> {
  return returnError(ApplicationErrors.UserError, message);
}

// Server related ***********************************************************************
function serverCodeToApplicationCode(
  serverCode: ServerReturnCodes
): ApplicationErrors {
  if (serverCode === ServerReturnCodes.ACK) return ApplicationErrors.None;
  else return serverCode + ApplicationErrors.SERVER_BASE;
}

export function returnErrorServer<T>(
  response: AxiosResponse<ApiResult>,
  result?: T
): TransactionStatusReturn<T> {
  const code = serverCodeToApplicationCode(response.data.code);
  const message = response.data.message!;
  const err = new TransactionStatusType();
  err.code = code;
  err.message = message;
  TransactionStatus.next(err);
  return { ...err, success: err.success, fail: err.fail, result: result };
}

export function returnStatusServer<T>(
  response: AxiosResponse<ApiResult>
): TransactionStatusReturn<T> {
  const code = serverCodeToApplicationCode(response.data.code);
  const message = response.data.message!;
  const result = response.data.result!;
  // const resultCount = response.data.resultCount;
  const data: any = response.data;
  const resultCount = data.resultCount;
  if (code === ApplicationErrors.None)
    return returnSuccess<T>(result, resultCount);
  else return returnError<T>(code, message, resultCount, result);
}
