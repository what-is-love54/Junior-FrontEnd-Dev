import React from 'react'
import { Routes } from "./Routes";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome'
import TabNavigator from './tabNavigation'
import Auth from '../screens/Auth'

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.Tabs} component={TabNavigator} />
      <Stack.Screen name={Routes.Auth} component={Auth} />
    </Stack.Navigator>
  );
}

export default AppNavigation;