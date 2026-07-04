import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./locales";

const idiomaGuardado = localStorage.getItem("language") || "es";

i18n
    .use(initReactI18next)
    .init({

        resources: {

            es: {
                translation: translations.es
            },

            en: {
                translation: translations.en
            },

            fr: {
                translation: translations.fr
            },

            it: {
                translation: translations.it
            },

            de: {
                translation: translations.de
            }

        },

        lng: idiomaGuardado,

        fallbackLng: "es",

        interpolation: {

            escapeValue: false

        }

    });

export default i18n;