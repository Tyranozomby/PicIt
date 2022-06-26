/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from "react";
import {StyleSheet, ToastAndroid} from "react-native";
import {E164Number} from "libphonenumber-js";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";
import appCheck from "@react-native-firebase/app-check";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import RegisterScreen from "./Screens/registerScreen";
import ValidateScreen from "./Screens/validateScreen";
// import {NavigationContainer} from "@react-navigation/native";

export type RootStackParamList = {
    Register: undefined;
    Validate: undefined;
};

const App = () => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

    // const isDarkMode = useColorScheme() === 'dark';
    const [phoneNumber, setPhoneNumber] = useState<E164Number>();

    const [confirmSMS, setConfirmSMS] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
    const [smsCode, setSMSCode] = useState("");


    function onAuthStateChanged(newUser: FirebaseAuthTypes.User | null) {
        setUser(newUser);
        if (initializing) {
            setInitializing(false);
        }
    }

    async function confirmCode() {
        try {
            await confirmSMS?.confirm(smsCode);
        } catch (error) {
            ToastAndroid.show("Code invalide", 3);
        }
    }

    async function signInWithPhoneNumber(userPhoneNumber: E164Number) {
        const confirmation = await auth().signInWithPhoneNumber(userPhoneNumber);
        setConfirmSMS(confirmation);
    }

    useEffect(() => {
        appCheck().activate("").then(r => console.log("appCheck fonctionne"))
            .catch(e => console.error("AppcheckFonctionnne pas : " + e.toString()));
        return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
    });

    if (initializing) {
        console.log("Initialisation");
        return null;
    }


    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Validate" component={ValidateScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

    // if (user !== null) {
    //     return (<View style={styles.container}>
    //         <Text>Waw t'es connecté, userid : {user?.uid}, numéro de tel : {user?.phoneNumber}</Text>
    //     </View>);
    // } else if (confirmSMS) {
    //     return (<View style={styles.container}>
    //         <TextInput onChangeText={setSMSCode} underlineColorAndroid="grey"
    //                    style={{width: 150}}/>
    //
    //         <Button title="Valider" disabled={smsCode.length < 2} onPress={confirmCode}/>
    //     </View>);
    // } else {
    //     return (
    //         <View style={styles.container}>
    //             <PhoneInput
    //                 placeholder="Enter phone number"
    //                 value={phoneNumber}
    //                 onChange={setPhoneNumber}/>
    //
    //             <Button title="Appuie" disabled={phoneNumber === undefined || !isValidPhoneNumber(phoneNumber)}
    //                     onPress={() => {
    //                         if (phoneNumber !== undefined) {signInWithPhoneNumber(phoneNumber);}
    //                     }}/>
    //
    //         </View>
    //     );
    // }
};

const styles = StyleSheet.create({
    phoneInput: {
        width: 200
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default App;
