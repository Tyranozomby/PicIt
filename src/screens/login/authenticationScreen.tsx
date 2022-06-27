import React, {useState} from "react";
import RegisterScreen from "./registerScreen";
import {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ValidateScreen from "./validateScreen";

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;

export type AuthStackParamList = {
    Register: undefined;
    Validate: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthentificationScreen: React.FC = () => {

    const [confirm, setConfirm] = useState<ConfirmationResult | null>();

    return (
        <Stack.Navigator>
            {confirm == null ? (
                <Stack.Screen name={"Register"}>
                    {(props) => <RegisterScreen {...props} setConfirm={setConfirm}/>}
                </Stack.Screen>
            ) : (
                <Stack.Screen name={"Validate"}>
                    {(props) => <ValidateScreen {...props} setConfirm={setConfirm} confirm={confirm}/>}
                </Stack.Screen>
            )
            }
        </Stack.Navigator>
    );
};
export default AuthentificationScreen;
