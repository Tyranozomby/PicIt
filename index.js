// noinspection ES6UnusedImports

/**
 * @format
 */

import {AppRegistry} from "react-native";
// eslint-disable-next-line no-unused-vars
import i18n from "./i18n/i18n";
import App from "./src/App";
import {name as appName} from "./app.json";



AppRegistry.registerComponent(appName, () => App);
