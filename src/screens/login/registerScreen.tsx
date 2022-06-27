import {Button, Text, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import PhoneInput from "react-phone-number-input/react-native-input";
import {E164Number} from "libphonenumber-js";
import {isValidPhoneNumber} from "react-phone-number-input";

const RegisterScreen: React.FC = () => {
    const navigation = useNavigation();
    const [number, setNumber] = useState<E164Number>();

    return (
        <View>
            <Text>Salut {number}</Text>

            <PhoneInput
                placeholder="Enter phone number"
                value={number}
                defaultCountry="FR"
                onChange={setNumber}/>
            <Button disabled={!isValidPhoneNumber(number || "")} title="Valider" onPress={() => navigation.navigate("Validate")}/>
        </View>
    );
};

export default RegisterScreen;
