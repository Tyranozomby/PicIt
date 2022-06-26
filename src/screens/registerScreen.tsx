import {Button, Text, View} from "react-native";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../util/routes";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;
type State = {}

class RegisterScreen extends React.Component<Props, State> {
    state : State = {}

    render() {

        return (
            <View>
                <Text>Salut</Text>
                <Button title="Truc" onPress={() => this.props.navigation.navigate("Validate")}/>
            </View>
        );
    }
}

export default RegisterScreen;
