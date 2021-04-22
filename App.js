import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native'
import RNBootSplash from 'react-native-bootsplash';
import AppNavigator from "./src/navigation/AppNavigation";
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';


const App = () => {

  const [onSwitch, setOnSwitch] = useState(false);

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);


  return (

    <NavigationContainer theme={onSwitch === true ? DarkTheme : DefaultTheme}>
      <AppNavigator />
      {/* <Switch
        value={onSwitch}
        onValueChange={(value) => setOnSwitch(value)}
        trackColor={'green'}
        backgroundColor={onSwitch ? '#000' : '#fff'}
      /> */}
    </NavigationContainer>
  );
};

export default App;
