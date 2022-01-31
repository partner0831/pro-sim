import { useEffect, useState } from "react";
import { BehaviorSubject, Subscription } from "rxjs";
import { logging, loggingUser } from "utils/Common";
import {
  returnStatusServer,
  TransactionPromise,
  ApplicationErrors,
  returnSuccess,
} from "businessobjects/TransactionStatus";
import {
  userApi,
  WalletApi,
  UserSanatizeDto,
  GetAllTransactionsDto,
  invalidateSession,
  GetUserProfileByAdminDto,
  UserProfileDto,
} from "businessobjects/Wallet-Frontend-Connector";

export type { GetUserProfileByAdminDto };

const UserInfo = new BehaviorSubject<null | User>(null);

export function subscribeUserInfo(
  action: (user: null | User) => void
): Subscription {
  return UserInfo.subscribe(action);
}

export function getUserInfo(): null | User {
  return UserInfo.getValue();
}

export function useUserInfo() {
  const [user, set_user] = useState<null | User>(UserInfo.getValue());

  useEffect(() => {
    const subscription = subscribeUserInfo((u) => {
      set_user(u);
    });
    return () => subscription.unsubscribe();
  }, []);

  return user;
}

export async function logout() {
  await userApi.logout({ sessionToken: "" });
  localStorage.removeItem("UserInfo");
  UserInfo.next(null);

  invalidateSession();
}

export type User = UserSanatizeDto;
export type GetAllTransactions = GetAllTransactionsDto;

function setUser(result: UserSanatizeDto) {
  localStorage.setItem("UserInfo", JSON.stringify(result));
  UserInfo.next(result);
  loggingUser(
    result.id!,
    result.nickName!,
    result.email!,
    result.mobileNumber!
  );
}

export async function loginWithPassword(
  login: string,
  password: string
): TransactionPromise<boolean> {
  const response = await userApi.loginPassword({
    password: password,
    login: login,
  });
  if (response.data.code === ApplicationErrors.None) {
    logging(`logging in ${response.data.result!}`);
    setUser(response.data.result!);
    return returnSuccess(true);
  } else {
    logging(`error logging in ${response.data.message}`);
    return returnSuccess(false);
  }
}

export async function loginPin(
  mobileNumber: string,
  pin: string
): TransactionPromise<boolean> {
  const response = await userApi.loginPIN({
    pin: pin,
    mobileNumber: mobileNumber,
  });
  if (response.data.code === ApplicationErrors.None) {
    logging(`logging in ${response.data.result!}`);
    setUser(response.data.result!);
    return returnSuccess(true);
  } else {
    logging(`error logging in ${response.data.message}`);
    return returnSuccess(false);
  }
}
export async function getProfile(): TransactionPromise<UserProfileDto> {
  return returnStatusServer(await userApi.getProfile());
}

export async function getDashboard(): TransactionPromise<UserProfileDto> {
  return returnStatusServer(await userApi.getProfile());
}
