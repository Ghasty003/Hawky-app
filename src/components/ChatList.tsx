import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Friend, User } from '../utils/types';

function ChatList({ navigation }: any) {

    const [friends, setFriends] = useState<Friend[]>([]);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        async function getFriends() {
            let user = JSON.parse(await AsyncStorage.getItem("user") as any) as any;
            setUser(user);
            const res = await fetch("https://hawky.onrender.com/api/friend", {
                headers: {
                    "Authorization": `Bearer ${user?.token}`
                }
            });
            const json = await res.json();

            if (!res.ok) {
                console.log("Error: ", json.error);
                return;
            }

            // console.log(json);
            setFriends(json);
        }

        getFriends();
    }, []);


    return (
        <View style={styles.container}>
            <FlatList 
                data={friends}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
                        <View style={styles.chatContainer}>
                            <Image 
                                source={require("../../assets/avatar-food.png")}
                                style={{ width: 65, height: 65 }} 
                            />
                            <View style={styles.messageContainer}>
                                <Text style={styles.nameText}>
                                    {item.friendDetails.userName === user?.userName ?
                                    item.friendDetails.friendUsername : item.friendDetails.userName}
                                </Text>
                                <Text style={styles.messageText}>Hello</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default ChatList;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#292F3F",
        borderRadius: 50,
        flex: 1,
        marginTop: 25,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    chatContainer: {
        marginVertical: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    nameText: {
        color: "white",
        fontSize: 17
    },
    messageText: {
        color: '#B3B9C9',
        fontSize: 15
    },
    messageContainer: {
        marginLeft: 15
    }
})