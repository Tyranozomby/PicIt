import React, {createContext, useDebugValue, useState} from "react";
import RegisterScreen from "./registerScreen";
import {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ValidateScreen from "./validateScreen";
import {useTranslation} from "react-i18next";

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;

export type AuthStackParamList = {
    Register: undefined;
    Validate: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

type NullableConfirmationResult = ConfirmationResult | null;
type AuthenticationContextType = {
    confirm: NullableConfirmationResult,
    setConfirm: (newVal: NullableConfirmationResult) => void;
}
export const AuthenticationContext = createContext<AuthenticationContextType>({
    confirm: null,
    setConfirm: () => {
    }
});

const AuthentificationScreen: React.FC = () => {

    const [confirm, setConfirm] = useState<NullableConfirmationResult>(null);

    const [t] = useTranslation(["screens"]);

    return (
        <AuthenticationContext.Provider value={{confirm, setConfirm}}>
            <Stack.Navigator>
                {confirm == null ?
                    <Stack.Screen name={"Register"} component={RegisterScreen}
                                  options={{title: t("screens:Register")}}/>
                    :
                    <Stack.Screen name={"Validate"} component={ValidateScreen}
                                  options={{title: t("screens:Validate")}}/>

                }
            </Stack.Navigator>
        </AuthenticationContext.Provider>
    );
};
export default AuthentificationScreen;
