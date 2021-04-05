import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import AppNavigator from "./src/navigation/AppNavigation";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
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

    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
