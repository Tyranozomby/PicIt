import React from "react";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {Text, View} from "react-native";
import {RootStackParamList} from "../util/routes";
import {connect, ConnectedProps} from "react-redux";
import {TestState} from "../store/slices/test";
import {RootState} from "../store/store";


const mapState = (state: RootState) => ({
    testState: state.testState
});

const mapDispatch = {};

const connector = connect(mapState,mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

interface Props extends ReduxProps{

}
type State = {}

class ValidateScreen extends React.Component<Props, State> {

    render() {
        return (
            <View>
                <Text>Pas salut</Text>
                <Text>Le compteur est a {this.props.testState.value}</Text>
            </View>
        );
    }
}


export default connector(ValidateScreen);
