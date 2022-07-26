


import "intl-pluralrules";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import fr from "./locales/fr/fr";



export const defaultNS = "translation";
export const resources  = {
    fr
};

i18n.use(initReactI18next).init({
    fallbackLng: "fr",
    defaultNS,
    debug: true,
    resources,
    interpolation: {
        escapeValue: false
    }
}).then(() => console.log("i18next initialized"));

export default i18n;
