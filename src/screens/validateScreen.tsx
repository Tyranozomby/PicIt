import React from "react";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {Text, View} from "react-native";
import {RootStackParamList} from "../util/routes";

type Props = NativeStackScreenProps<RootStackParamList, "Validate">;
type State = {}

class ValidateScreen extends React.Component<Props, State> {

    render() {
        return (
            <View>
                <Text>Pas salut</Text>
            </View>
        );
    }
}

export default ValidateScreen;
