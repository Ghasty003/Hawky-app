import { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';

import colors from '../utils/colors';
import { LoginProp } from "../utils/types";

function Login({ navigation }: LoginProp) {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
        </View>
    );
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.background
    }
})