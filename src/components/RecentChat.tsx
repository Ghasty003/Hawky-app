import React from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import Chat from './Chat';

function RecentChat() {
    return (
        <View
            style={{
                paddingLeft: 30,
                overflow: "scroll"
            }}
        >
            <Text
                style={{
                    color: "rgba(255, 255, 255, 0.58)",
                    fontSize: 13,
                    paddingTop: 10,
                    paddingBottom: 15
                }}
            >RECENT</Text>
            <ScrollView horizontal={true}>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </ScrollView>
        </View>
    );
}

export default RecentChat;