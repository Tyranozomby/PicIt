import React, {ReactNode, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegisterScreen from "./screens/login/registerScreen";
import ValidateScreen from "./screens/login/validateScreen";
import {RootStackParamList} from "./util/routes";
import {Provider} from "react-redux";
import auth from "@react-native-firebase/auth";

import {store} from "./store/store";
import {useAppSelector} from "./store/hooks";


const Stack = createNativeStackNavigator<RootStackParamList>();

const App: () => ReactNode = () => {
    const [initialized, setInitialized] = useState(false);
    const user = useAppSelector((state)=> state.userState.user);

        return (
            <Provider store={store}>
                    <NavigationContainer>


                        <Stack.Navigator>
                            <Stack.Screen name="Register" component={RegisterScreen}/>
                            <Stack.Screen name="Validate" component={ValidateScreen}/>
                        </Stack.Navigator>
                    </NavigationContainer>
        </Provider>
    );
};


export default App;
