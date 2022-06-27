import React, {ReactNode, useEffect} from "react";
import {Text} from "react-native";
import {Provider} from "react-redux";

import {store} from "./store/store";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import AuthenticationScreen from "./screens/login/authenticationScreen";
import auth from "@react-native-firebase/auth";
import {actions, logout} from "./store/slices/user";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const App: () => ReactNode = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Nav/>
            </NavigationContainer>
        </Provider>
    );
};

export type RootStackParamList = {
    Main: undefined
    Authentication: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Nav: React.FC = () => {
    const loggedIn = useAppSelector((state) => state.userState.loggedIn);

    const dispatch = useAppDispatch();
    useEffect(() => auth().onAuthStateChanged((u) => {
        u == null ? dispatch(logout()) : dispatch(actions.login());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);


    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {loggedIn ?
                <Stack.Screen name={"Main"}>
                    {() => <Text>UwU</Text>}
                </Stack.Screen>
                :
                <Stack.Screen name={"Authentication"} component={AuthenticationScreen}/>
            }
        </Stack.Navigator>
    );


};

export default App;
