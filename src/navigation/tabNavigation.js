import React from "react";
import { Routes } from "./Routes";
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ScaledSheet } from 'react-native-size-matters';
import YourSafety from '../screens/yourSafety';
import ChoseSituation from '../screens/Chose-situation';
import Home from '../screens/Home';
import Rules from '../screens/Rules';
import Psyhology from '../screens/Psyhology';
import History from '../screens/History';
import SafetyLevel from '../screens/Safety-level';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      headerMode='none'
      initialRouteName={Routes.ChoseSituation}
    >
      <Stack.Screen name={Routes.ChoseSituation} component={ChoseSituation} />
      <Stack.Screen name={Routes.YourSafety} component={YourSafety} />
      <Stack.Screen name={Routes.SafetyLevel} component={SafetyLevel} />
      <Stack.Screen name={Routes.Rules} component={Rules} />
      <Stack.Screen name={Routes.Psyhology} component={Psyhology} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === Routes.Home) {
            iconName = focused ? require('../image/homeIcon2.png') : require('../image/homeIcon.png')
          } else if (route.name === Routes.ChoseSituation) {
            iconName = focused ? require('../image/safetyIcon2.png') : require('../image/safetyIcon.png')
          } else if (route.name === Routes.History) {
            iconName = focused ? require('../image/historyIcon2.png') : require('../image/historyIcon.png')
          }
          return <Image source={iconName} style={styles.iconNavigate} />
        },
      })}

    >
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen
        name={Routes.ChoseSituation}
        component={StackNavigation}
        options={{
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen
        name={Routes.History}
        component={History}
        options={{
          tabBarLabel: () => null
        }}
      />
    </Tab.Navigator>
  );
}

const styles = ScaledSheet.create({
  iconNavigate: {
    resizeMode: 'contain',
    width: '28@ms',
  },
})



export default TabNavigator