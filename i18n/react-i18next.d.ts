// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import auth from "./locales/fr/auth.json";


import {resources, defaultNS} from "./i18n";


// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS,
        resources: typeof resources.fr
    }
}
