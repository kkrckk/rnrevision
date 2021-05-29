import React, {useState} from "react";
import { View, Text, StyleSheet,Button } from "react-native";

export default ColourView = ({cubeColor}) => {
    return (
        <View style={{ backgroundColor: cubeColor, width: 100, height: 100 }}/>
    );
}

const styles = StyleSheet.create({
})