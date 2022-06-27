import {Button, Text, View} from "react-native";
import React, {useState} from "react";
import PhoneInput from "react-phone-number-input/react-native-input";
import {E164Number} from "libphonenumber-js";
import {isValidPhoneNumber} from "react-phone-number-input";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;

const RegisterScreen: React.FC<{ setConfirm: (confirm: ConfirmationResult) => void }> = ({setConfirm}) => {
    const [number, setNumber] = useState<E164Number>();

    async function login() {
        if (number == null)
            return;

        console.log("aaaaaaaaaaaaaaaaaaa");
        let confirmationResult = await auth().signInWithPhoneNumber(number, true);
        console.log(confirmationResult + "a");
        setConfirm(confirmationResult);
    }

    return (
        <View>
            <Text>Salut {number}</Text>

            <PhoneInput
                placeholder="Enter phone number"
                value={number}
                defaultCountry="FR"
                onChange={setNumber}/>

            <Button disabled={!isValidPhoneNumber(number || "")} title="Valider" onPress={login}/>
        </View>
    );
};

export default RegisterScreen;
