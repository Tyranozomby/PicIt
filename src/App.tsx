/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterScreen from "./screens/registerScreen";
import ValidateScreen from "./screens/validateScreen";
import {RootStackParamList} from "./util/routes";
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "@react-native-firebase/app";
import style from "./App.module.scss";

import {store, rrfConfig} from "./store/store";



const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
};

type State = {
    initialized: boolean,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

class App extends React.Component<{}, State> {

    state: State = {initialized: false}

    render() {
        return (
            <Provider store={store}>
                {/*<ReactReduxFirebaseProvider {...rrfProps}>*/}
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Register" component={RegisterScreen}/>
                            <Stack.Screen name="Validate" component={ValidateScreen}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                 {/*</ReactReduxFirebaseProvider>*/}
             </Provider>
        );
    }
}


export default App;
