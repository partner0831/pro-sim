// import I18n from 'i18n';
export enum ApplicationErrors {
  None = 0,
  UserError,
  ParameterNotFound,
  UnknownRequestType,
  UnknownSendType,
  UnknowUserTypeReturn,
  UserInfoIsEmpty,
  invalidSesion,
  createSessionFailed,
  firebaseTokenFailed,
  biomtericsFailed,
  NotAvailable,
  UnknownStatus,
  NoNetwork,

  SERVER_BASE = 20000,

  STICKER_BASE = 30000,
}

const I18n = new (class {
  t(t: string) {
    return t;
  }
})();

export function niceError(error: ApplicationErrors): null | string {
  console.log("error", error);
  if (
    error >= ApplicationErrors.SERVER_BASE &&
    error < ApplicationErrors.STICKER_BASE
  ) {
    return (
      "The server gave an error: " + (error - ApplicationErrors.SERVER_BASE)
    );
  }

  switch (error) {
    case ApplicationErrors.None:
      return I18n.t("no error");

    case ApplicationErrors.ParameterNotFound:
      return I18n.t("Parameter not found in response");
    case ApplicationErrors.UnknownRequestType:
      return I18n.t("The request type is unknown");
    case ApplicationErrors.UnknownSendType:
      return I18n.t("The send type is unknown");
    case ApplicationErrors.UnknowUserTypeReturn:
      return I18n.t("The result code for verifysms is unknown");
    case ApplicationErrors.invalidSesion:
      return I18n.t("Invalid session");
    case ApplicationErrors.createSessionFailed:
      return I18n.t("Can't create session");
    case ApplicationErrors.firebaseTokenFailed:
      return I18n.t("Can't create firebase connection");
    case ApplicationErrors.biomtericsFailed:
      return I18n.t("Biometric validation failed");
    case ApplicationErrors.NotAvailable:
      return I18n.t("This payment method is not available");
    case ApplicationErrors.UnknownStatus:
      return I18n.t("Unknown status");
    case ApplicationErrors.NoNetwork:
      return I18n.t("No network connection");
  }

  return null;
}
