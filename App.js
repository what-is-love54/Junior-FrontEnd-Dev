import 'react-native-gesture-handler';
import React, {useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Image, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNBootSplash from 'react-native-bootsplash';
import { ScaledSheet } from 'react-native-size-matters';
import WelcomeScreen from "./src/screens/welcome";


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  
  useEffect(() => RNBootSplash.hide({ duration: 1000 }), []);

  return (
    <>
    <WelcomeScreen />
    </>
  );
};

const theme = {
  colors: {
    background: '#fff',
  },
};



export default App;
