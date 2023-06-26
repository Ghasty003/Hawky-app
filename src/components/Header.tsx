import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
                <Icon name='search' size={25} color="white" />
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