import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default ImageDetail = ({ title, imageSource }) => {
    return (
        <View style={styles.main}>
            <Image source={imageSource}/>
        <Text style={{fontSize: 40,color: randomHexColor()}}>{title}</Text>
    </View>
    );
};

const randomHexColor = () => {
return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
});
};

const styles = StyleSheet.create({
    main: {
        flex:1
    },
    text: {
        fontSize: 40,
        color: randomHexColor(),
    },
});


