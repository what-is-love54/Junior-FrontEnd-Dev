import Routes from "./Routes";
import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import ChoseSituation from '../screens/Chose-situation'
import { ScaledSheet } from 'react-native-size-matters';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainHome"
        component={Home}
        // initialParams={{navigation}}
        options={{
          tabBarIcon: ({ focused }) => (

            <Image
              source={require('../image/homeIcon2.png')}
              style={[styles.iconNavigate, focused ? { tintColor: '#000000' } : styles.iconNavigate]} />
            // :
            // <Image source={require('../image/homeIcon.png')} style={styles.iconNavigate} />
          ),
        }}
      />
      <Tab.Screen name="MainHome2" component={ChoseSituation}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={require('../image/safetyIcon2.png')} style={styles.iconNavigate} />
              :
              <Image source={require('../image/safetyIcon.png')} style={styles.iconNavigate} />
          ),
        }} />
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