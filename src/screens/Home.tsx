import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";


import { HomeProp } from '../utils/types';
import Header from '../components/Header';
import colors from '../utils/colors';
import RecentChat from '../components/RecentChat';

function Home({ navigation }: HomeProp) {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <RecentChat />
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: colors.background,
        flex: 1
    }
})