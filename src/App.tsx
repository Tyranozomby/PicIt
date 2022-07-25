import React, {ReactNode, useEffect, useState} from "react";
import {Text} from "react-native";
import AuthenticationScreen from "./screens/authentication/authenticationScreen";
import auth from "@react-native-firebase/auth";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";


const App: () => ReactNode = () => {
    return (
        <NavigationContainer>
            <Nav/>
        </NavigationContainer>
    );
};

export type RootStackParamList = {
    Main: undefined
    Authentication: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function useFirebaseCurrentUser() {
    const [currentUser, setCurrentUser] = useState(auth().currentUser);
    useEffect(() => auth().onAuthStateChanged(setCurrentUser), []);
    return currentUser;
}

const Nav: React.FC = () => {

    const currentUser = useFirebaseCurrentUser();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {currentUser == null ?
                <Stack.Screen name={"Authentication"} component={AuthenticationScreen}/>
                :
                <Stack.Screen name={"Main"}>
                    {() => <Text>UwU</Text>}
                </Stack.Screen>
            }
        </Stack.Navigator>
    );


};

export default App;
