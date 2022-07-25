import {Button, Text, View} from "react-native";
import React, {useContext, useState} from "react";
import PhoneInput from "react-phone-number-input/react-native-input";
import {E164Number} from "libphonenumber-js";
import {isValidPhoneNumber} from "react-phone-number-input";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {useTranslation} from "react-i18next";
import {AuthenticationContext} from "./authenticationScreen";

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;

const RegisterScreen: React.FC<{ setConfirm: (confirm: ConfirmationResult) => void }> = ({setConfirm}) => {
    const [number, setNumber] = useState<E164Number>();

    const [t] = useTranslation(["auth"]);

    const authContext = useContext(AuthenticationContext);

    async function login() {
        if (number == null)
            return;
        let confirmationResult = await auth().signInWithPhoneNumber(number,true);
        authContext.setConfirm(confirmationResult);
    }

    return (
        <View>
            <Text>
            {t("auth:phoneNumberLabel")}
            </Text>
            <PhoneInput
                placeholder={t("auth:phoneNumberPlaceholder")}
                value={number}
                defaultCountry="FR"
                onChange={setNumber} />

            <Button disabled={!isValidPhoneNumber(number || "")} title={t("auth:confirmPhoneNumberButtonText")} onPress={login}/>
        </View>
    );
};

export default RegisterScreen;
