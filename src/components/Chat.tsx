import React from 'react';
import { View, Image, Text, StyleSheet } from "react-native";

function Chat() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/avatar-food.png")} />
            <Text style={{ textAlign: "center", color: "white", fontSize: 16}}>
                Name
            </Text>
        </View>
    );
}

export default Chat;


const styles = StyleSheet.create({
    container: {
        width: 65,
        marginRight: 15
    },
    image: {
        width: 65,
        height: 65
    }
})