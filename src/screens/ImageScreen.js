import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../screens/components/ImageDetail';
var img = require('../../assets/beach.jpg')

export default ImageScreen = () => {
    const screenName = 'Image Screen';
    return (
    <View style={styles.main}>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
    </View>
    );
};


const styles = StyleSheet.create({
    main: {
        flex:1
    },
    text: {
        fontSize: 40
    },
});


