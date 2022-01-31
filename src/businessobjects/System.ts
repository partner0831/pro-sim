import {
  walletApi,
  superAdminApi,
  CountryDto,
} from "./Wallet-Frontend-Connector";
import {
  returnStatusServer,
  returnSuccess,
  TransactionPromise,
} from "businessobjects/TransactionStatus";
import { ApplicationErrors } from "./ApplicationErrors";
import { useEffect, useState } from "react";
import { version as portalVersion } from "../../package.json";

let apiVersion: number;
export async function getAPIVersion(): TransactionPromise<number> {
  if (apiVersion !== undefined) return returnSuccess(apiVersion);

  const response = await walletApi.getVersion();
  if (response.data.code === ApplicationErrors.None) {
    apiVersion = response.data.result!.version!;
    return returnSuccess(response.data.result!.version);
  }

  return returnStatusServer(response);
}

export function getPortalVersion(): string {
  return portalVersion;
}

let countriesCache: CountryDto[] = [];

export async function getallcountries(): TransactionPromise<CountryDto[]> {
  return returnStatusServer(await superAdminApi.getAllCountries());
}

export function useAdminCountries() {
  const [countries, set_countries] = useState<CountryDto[]>();
  useEffect(() => {
    async function init() {
      const response = await getallcountries();
      if (response.success()) {
        countriesCache = response.result!;
        set_countries(response.result!);
      }
    }
    if (countriesCache.length === 0) {
      init();
    } else {
      set_countries(countriesCache);
    }
  }, []);

  return countries;
}
