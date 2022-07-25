import React, {useCallback, useContext, useEffect, useState} from "react";
import {Alert, BackHandler, Button, Text, TextInput, View} from "react-native";
import {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {useFocusEffect} from "@react-navigation/native";
import {AuthenticationContext} from "./authenticationScreen";

type ConfirmationResult = FirebaseAuthTypes.ConfirmationResult;


const ValidateScreen: React.FC = () => {
        const [code, setCode] = useState("");

        const {confirm, setConfirm} = useContext(AuthenticationContext);

        async function confirmCode() {
            try {
                await confirm!.confirm(code);
            } catch (error: any) {
                if (error.code === "auth/session-expired") {
                    Alert.alert("Le code a expiré", "Veuillez rappuyer pour recevoir un nouveau SMS");
                    setConfirm(null);
                } else if (error.code === "auth/invalid-verification-code")
                    Alert.alert("Le code est invalide", "Veuillez vérifier que vous avez bien entré le bon code");
                else
                    console.error(error);
            }
        }

        const onBackPress = useCallback(() => {
            setConfirm(null);
            return true;
        }, [setConfirm]);

        useEffect(() => {
            console.log("Effect run");
            BackHandler.addEventListener("hardwareBackPress", onBackPress);
            return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        },[onBackPress]);

        return (
            <View>
                <Text>Pas salut</Text>
                <TextInput onChangeText={setCode} underlineColorAndroid="grey" autoFocus/>
                <Button title="Valider" disabled={code.length < 5} onPress={confirmCode}/>
                <Text onPress={onBackPress}>Modifier le numéro</Text>
            </View>
        );
    }
;

export default ValidateScreen;
