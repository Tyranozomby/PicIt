import {Button, Text, View} from "react-native";
import React, {useState} from "react";
import PhoneInput from "react-phone-number-input/react-native-input";
import {E164Number} from "libphonenumber-js";
import {isValidPhoneNumber} from "react-phone-number-input";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {useTranslation} from "react-i18next";

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;

const RegisterScreen: React.FC<{ setConfirm: (confirm: ConfirmationResult) => void }> = ({setConfirm}) => {
    const [number, setNumber] = useState<E164Number>();

    const [t] = useTranslation(["auth","translation"]);


    async function login() {
        if (number == null)
            return;

        let confirmationResult = await auth().signInWithPhoneNumber(number, true);
        console.log(confirmationResult + "a");
        setConfirm(confirmationResult);
    }

    return (
        <View>
            <Text>Salut {number}</Text>

            <PhoneInput
                placeholder={t("auth:phoneNumberPlaceholder")}
                value={number}
                defaultCountry="FR"
                onChange={setNumber}/>

            <Button disabled={!isValidPhoneNumber(number || "")} title={t("auth:confirmPhoneNumberButtonText")} onPress={login}/>
        </View>
    );
};

export default RegisterScreen;
