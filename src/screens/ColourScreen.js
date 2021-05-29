import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import  ColourView  from './components/ColourView';

export default ColourScreen = () => {
    const [color, setColor] = useState([randomRGB()]);
    return (
    <View>
        <Button title="Add Color" onPress={() => {
            setColor([...color, randomRGB()]);
            }} />
            {color.map((color) => {
                return (
                <ColourView cubeColor={color} />
                );
            })}
    </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
    }
})

