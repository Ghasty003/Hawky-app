import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from "react-native";

import colors from '../utils/colors';
import { ChatsProp } from '../utils/types';

function Chats({ navigation }: ChatsProp) {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const messages = [
        {_id: 1, text: "Hello world, this is a text from the auth user. "},
        {_id: 2, text: "Hello world, this is a text from the other user."},
        {_id: 1, text: "Second text from the auth user"},
        {_id: 2, text: "Second text from the other user"},
        {_id: 1, text: "Hello world, this is a text from the auth user. "},
        {_id: 2, text: "Hello world, this is a text from the other user."},
        {_id: 1, text: "Second text from the auth user"},
        {_id: 2, text: "Second text from the other user"},
        {_id: 1, text: "Hello world, this is a text from the auth user. "},
        {_id: 2, text: "Hello world, this is a text from the other user."},
        {_id: 1, text: "Second text from the auth user"},
        {_id: 2, text: "Second text from the other user"},
        {_id: 1, text: "Hello world, this is a text from the auth user. "},
        {_id: 2, text: "Hello world, this is a text from the other user."},
        {_id: 1, text: "Second text from the auth user"},
        {_id: 2, text: "Second text from the other user"},
        {_id: 1, text: "Hello world, this is a text from the auth user. "},
        {_id: 2, text: "Hello world, this is a text from the other user."},
        {_id: 1, text: "Second text from the auth user"},
        {_id: 2, text: "Second text from the other user"},
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/avatar-food.png")} />
                    <Text style={{ color: "white", fontSize: 17}}>John Doe</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 17, color: "white"}}>Icon</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={messages}
                renderItem={({ item }) => (
                    <View style={{ alignItems: item._id === 1 ? "flex-end" : "flex-start"}}>
                        <View style={[styles.chat, { backgroundColor: item._id === 1 ? "#7A8194" : "#373E4E"}]}>
                            <Text style={{ color: "white", fontSize: 15}}>{ item.text }</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 30 }}
            />

            <View style={styles.inputContainer}>
                <TextInput 
                 placeholderTextColor="rgba(255, 255, 255, 0.45)"
                 placeholder='Message'
                 style={{ flex: 1, padding: 5, color: "white"}}
                />
                <Text>Send</Text>
            </View>
        </View>
    );
}

export default Chats;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 20,
        paddingHorizontal: 30
    },
    chat: {
        borderRadius: 10,
        marginVertical: 10,
        width: 250,
        minHeight: 50,
        padding: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputContainer: {
        backgroundColor: '#3D4354',
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center"
    },
    image: {
        width: 45,
        height: 45
    },
    imageContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    }
})