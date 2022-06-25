/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
    // const isDarkMode = useColorScheme() === 'dark';
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={styles.container}>
            <TextInput placeholder="salut" value={phoneNumber} style={styles.phoneInput} onChangeText={t => {
                if (/^\+?\d*$/.test(t)) {
                    setPhoneNumber(t);
                }
            }}
                       keyboardType="number-pad" textContentType="telephoneNumber" underlineColorAndroid="grey"/>
            <Text>{phoneNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    phoneInput: {
        width: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;
