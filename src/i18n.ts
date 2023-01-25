import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import Language from "./enums/language";
import commonEN from "./assets/locales/en/common.json"
import commonFR from "./assets/locales/fr/common.json"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";


i18n.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
    ns:"common",
    defaultNS:"common",
    fallbackLng: Language.EN,
    supportedLngs: Object.values(Language),
    resources: {
        [Language.EN]: {
          common:commonEN,
        },
        [Language.FR]: {
        common:commonFR,
        }
    },
    interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection:{
        order:["querystring","localStorage"],
        caches:['localStorage'],
        lookupQuerystring:"lang",

    }
})
