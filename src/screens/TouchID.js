import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Routes } from '../navigation/Routes';



const TouchID = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      </View>
    </View>
  )
}



const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },

});

export default TouchID