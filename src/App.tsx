import React, {ReactNode, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterScreen from "./screens/registerScreen";
import ValidateScreen from "./screens/validateScreen";
import {RootStackParamList} from "./util/routes";
import {Provider} from "react-redux";
import firebase from "@react-native-firebase/app";

import {rrfConfig, store} from "./store/store";


const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: () => ReactNode = () => {
    const [initialized, setInitialized] = useState(false);

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
};


export default App;
