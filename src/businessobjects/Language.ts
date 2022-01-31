import i18next from 'i18next'
import { logging } from 'utils/Common';

import en from 'locales/en'
import nl from 'locales/nl'
import { CurrencyDto } from './Wallet-Frontend-Connector'

const WalletLanguageSetting = 'WalletLanguageSetting'

export type LanguageRecord = { key: string, value: string }

export async function init() {
    let language = localStorage.getItem(WalletLanguageSetting)
    if (language == null) language = 'en-US'

    logging(`Default language ${language}`)

    await i18next.init({
        lng: language, // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
            'en-US': {
                translation: en
            },
            'nl-NL': {
                translation: nl
            }
        }
    })
}

export function t(key: string): string {
    return i18next.t(key)
}

export function formatCurrency(currency: CurrencyDto, amount: number): string {
    if (currency == null) return ''
    let s = currency.format
    const formattedNumber = s
        .replace("%u", currency.symbol)
        .replace("%n", amount.toFixed(currency.precision))


    return formattedNumber
}

export function switchLanguage(language: string) {
    localStorage.setItem(WalletLanguageSetting, language)
    i18next.changeLanguage(language, () => { })
}

export const availableLanguages: LanguageRecord[] = Array.from(getSupportedLanguages()
    .entries())
    .map(item => {
        return {
            key: item[0],
            value: item[1]
        }
    })



export function getSupportedLanguages(): Map<string, string> {
    return new Map<string, string>([
        ['en-US', "English (US)"],
        ['nl-NL', "Nederlands (Nederland)"]
    ])
}