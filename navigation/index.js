import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const screens = createStackNavigator(
    {
        Login,
        SignUp,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          height: '10%',
          backgroundColor: 'white', 
          borderBottomColor: "transparent",
          elevation: 0 // for android
        },
    }
}
);

export default createAppContainer(screens);
