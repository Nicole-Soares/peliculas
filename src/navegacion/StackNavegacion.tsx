import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DesatallesScreen from '../screens/DetallesScreen';

const Stack = createStackNavigator();

export default function StackNavegacion() {
  return (
    <Stack.Navigator
    screenOptiones={{
        headerShow: false,
        cardStyle: {
            backgroundColor: "white"
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={DesatallesScreen} />
      
    </Stack.Navigator>
  );
}