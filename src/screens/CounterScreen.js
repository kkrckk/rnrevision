import React, {useState} from "react";
import { View, Text, StyleSheet,Button } from "react-native";

export default CounterScreen = () => {
    //Incrementing this variable does not work as react does not watch this variable.
    //let counter = 0;

        // <View>
        //     <Button title="Increase" onPress={() => counter++} />
        //     <Button title="Decrease" onPress={() => counter--} />
        //     <Text>Counter Value is:- {counter}</Text>
        // </View>

    //useState returns an array, and we have array destructuring to the left of equal sign. 
    //usestate takes the first argument as the initial state.
    const [counter, setCounter] = useState(0);
    return (
    <View>
        <Button title="Increase" onPress={() => setCounter(counter + 1)} />
        <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
        <Text>Counter Value is:- {counter}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    }
})