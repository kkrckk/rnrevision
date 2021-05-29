import React from "react";
import { View } from 'react-native'
import Button from './components/Button'

const HomeScreen = (prop) => {
  return (
    <View>
      <Button title="Component Screen" onTouch={() => prop.navigation.navigate('Components')}/>
      <Button title="List Screen" onTouch={() => prop.navigation.navigate('ListScreen')}/>
      <Button title="Home Screen" onTouch={() => prop.navigation.navigate('Home')} />
      <Button title="Image Screen" onTouch={() => prop.navigation.navigate('Image')} />
      <Button title="Counter Screen" onTouch={() => prop.navigation.navigate('Counter')} />
      <Button title="Color Screen" onTouch={() => prop.navigation.navigate('Colour')} />
    </View>
  );
};

export default HomeScreen;
