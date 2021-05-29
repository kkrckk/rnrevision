import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default ComponentsScreen = () => {
    const name = 'My name is Krishna';
    const message = 'Getting Started With React Native';
    return (
    <View>
        <Text style={styles.heading}>{message}</Text>
        <Text style={styles.name}>{message}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    body: {
        fontSize: 20
    },
    heading: {
        fontSize: 40
    },
});