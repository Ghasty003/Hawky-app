import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Header() {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: "white",
                    fontSize: 30
                }}
            >Messages</Text>
            <TouchableOpacity>
                <Text
                style={{
                    color: "white",
                    fontSize: 20
                }}
                >Icon</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30
    }
})