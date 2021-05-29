

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age:'45' },
        { name: 'Friend #2', age:'50' },
        { name: 'Friend #3', age:'60' },
        { name: 'Friend #4', age:'70' },
        { name: 'Friend #5', age:'35' }
    ];
    return (
        <View>
            <FlatList
                data={friends}
                renderItem={({ item }) => <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}
                keyExtractor={item => item.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        marginHorizontal:50
    }
})