
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export default Button = ({title,onTouch}) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onTouch()}>
            <View style={styles.viewstyle}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 2,
        backgroundColor: 'red',
    },
    viewstyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15,
    }
})


