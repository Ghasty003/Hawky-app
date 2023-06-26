import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from "react-native";

function ChatList() {

    const data = [
        {name: "John Doe", lastMessage: "Hello"},
        {name: "Kate Doe", lastMessage: "Hi"},
        {name: "John Doe", lastMessage: "Hello"},
        {name: "Kate Doe", lastMessage: "Hi"},
        {name: "John Doe", lastMessage: "Hello"},
        {name: "Kate Doe", lastMessage: "Hi"},
        {name: "John Doe", lastMessage: "Hello"},
        {name: "Kate Doe", lastMessage: "Hi"},
        {name: "John Doe", lastMessage: "Hello"},
        {name: "Kate Doe", lastMessage: "Hi"},
        {name: "John Doe", lastMessage: "Hello"},
        {name: "Kate Doe", lastMessage: "Hi"},
    ]

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.chatContainer}>
                        <Image 
                            source={require("../../assets/avatar-food.png")}
                            style={{ width: 65, height: 65 }} 
                        />
                        <View style={styles.messageContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.messageText}>{item.lastMessage}</Text>
                        </View>
                    </View>
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