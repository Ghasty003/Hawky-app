import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image,
 TouchableOpacity, TextInput as RNTI,
 TouchableWithoutFeedback
} 
from 'react-native';
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from '../utils/colors';
import { LoginProp } from "../utils/types";
import useToggle from "../hooks/useToggle";

function Login({ navigation }: LoginProp) {

    const usernameRef = useRef<RNTI>(null!);
    const passwordRef = useRef<RNTI>(null!);

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [value, toggleValue] = useToggle(true);

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const handleContainerPress = () => {
        usernameRef.current.blur();
        passwordRef.current.blur();
    }

    const handleLogin = async () => {
        setLoading(true);

        try {
            const res = await fetch("https://hawky.onrender.com/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, password })
            });
            const json = await res.json();

            if (!res.ok) {
                console.log(json.error);
                setLoading(false);
                return;
            }

            await AsyncStorage.setItem('user', JSON.stringify(json));
            navigation.navigate("Home");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handleContainerPress}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.header}>
                        <Image style={styles.image} source={require("../../assets/hawky.png")} />
                        <Text style={styles.headerText}>Login your account</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 30
                        }}
                    >
                        <TextInput
                            mode="flat" 
                            label="Username"
                            style={styles.input}
                            right={<TextInput.Icon icon={() => <Icon name='person' size={20} />} />}
                            ref={usernameRef}
                            value={userName}
                            onChangeText={setUsername}
                        />

                        <TextInput
                            ref={passwordRef}
                            label='Password'
                            mode='flat'
                            secureTextEntry={value}
                            style={styles.input}
                            right={<TextInput.Icon
                                icon={() => <Icon onPress={toggleValue} name={value ? "eye" : "eye-off"} size={20} />} />}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity
                            style={{
                                marginTop: 30
                            }}
                            onPress={handleLogin}
                        >
                            <Button
                                mode="elevated"
                                buttonColor="coral"
                                textColor="white"
                                style={{
                                    paddingVertical: 3,
                                }}
                                disabled={loading}
                            >  
                                { loading ? "Loading..." : "Login" }
                            </Button>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.registerContainer}>
                        <Text style={{color: "white", fontSize: 16}}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <Text style={{color: "coral", fontSize: 16}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center"
    },
    header: {
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "white",
        fontSize: 20,
        marginTop: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 200
    },
    input: {
        marginVertical: 10
    },
    loginContainer: {
        backgroundColor: "#292F3F",
        marginTop: 150,
        width: "90%",
        marginHorizontal: "auto",
        padding: 20
    },
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        gap: 6
    }
})