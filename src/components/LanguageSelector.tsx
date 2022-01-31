import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { availableLanguages, switchLanguage, t } from 'businessobjects/Language'
import {
    Redirect,
} from "react-router-dom";

export function LanguageSelector() {
    const [languageIsSet, set_languageIsSet] = useState(false)
    function selectLanguage(language: null | string) {
        console.log('switch', language)
        if (language != null) {
            switchLanguage(language)
            set_languageIsSet(true)
        }
    }

    if (languageIsSet) {
        return <Redirect to={{ pathname: "/" }} />
    }
    else {
        return <Dropdown onSelect={(key) => selectLanguage(key)}>
            <Dropdown.Toggle id="dropdown-basic" >
                {t('Language')}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    availableLanguages.map(lang => <Dropdown.Item name={lang.key} key={lang.key}>{lang.value}</Dropdown.Item>)
                }
            </Dropdown.Menu>
        </Dropdown>
    }

}