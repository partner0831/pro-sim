
import * as Sentry from "@sentry/react";

export function emailAddressIsValid(email: string) {
    let reg = /^([a-zA-Z0-9_\-\.+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(email) === true;
}

export enum LoggingServerity {
    INFO,
    WARNING,
    ERROR
}

export function logging(what: string, severity: LoggingServerity = LoggingServerity.INFO) {
    Sentry.captureMessage(what)
    console.log(what)
}

export function loggingUser(id: string, username: string, email: string, mobileNumber: string) {
    logging(`logged in ${id} ${username} ${email} ${mobileNumber}`);

    Sentry.setUser({
        id: id,
        username: username,
        email: email,
        mobileNumber: mobileNumber
    });

}


export function arrayToString(ar: number[]): string {
    let result = ''
    ar.forEach(a => result = result.concat(String.fromCharCode(a)))
    return result
}

export function stringToArray(str: string): number[] {
    if (typeof (str) != "string") return str

    var bytes = []
    var charCode

    for (var i = 0; i < str.length; ++i) {
        charCode = str.charCodeAt(i)
        bytes.push(charCode & 0xFF)
    }

    return bytes
}

export function epochToString(): string {
    let result = []
    let epoch = Math.round(Date.now() / 1000)
    result.push((epoch & 0xff000000) >>> 24)
    result.push((epoch & 0x00ff0000) >>> 16)
    result.push((epoch & 0x0000ff00) >>> 8)
    result.push((epoch & 0x000000ff))


    return arrayToString(result)
}

export const getContrastYIQ = (hexcolor: string, a: number = 1.0) => {
    if (hexcolor === undefined || hexcolor === null) {
        return '#444';
    }
    let r = parseInt(hexcolor.substring(1, 3), 16);
    let g = parseInt(hexcolor.substring(3, 5), 16);
    let b = parseInt(hexcolor.substring(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}