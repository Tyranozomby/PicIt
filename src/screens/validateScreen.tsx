import React from "react";
import {Button, Text, View} from "react-native";
import {ReactNode} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {actions as testActions, selectCount} from "../store/slices/test";


const ValidateScreen : React.FC = () =>  {

    const value = useAppSelector(selectCount);

    const dispatch = useAppDispatch();

    return (
        <View>
            <Text>Pas salut</Text>
            <Text>Le compteur est a {value}</Text>
            <Button title={"Augmenter le compteur"} onPress={() => dispatch(testActions.increment)} />
        </View>
    );
};


export default ValidateScreen;

