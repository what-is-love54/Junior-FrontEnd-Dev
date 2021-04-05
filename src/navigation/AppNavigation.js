import React from 'react'
import { Routes } from "./Routes";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome'
import TabNavigator from './tabNavigation'
import Home from '../screens/Home'

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ header: () => null }} />
      {/* <Stack.Screen name="Home" component={Home} options={{header: () => null}} /> */}
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ header: () => null }} />
    </Stack.Navigator>
  );
}

export default AppNavigation;