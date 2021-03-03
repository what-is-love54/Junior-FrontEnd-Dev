import React, { useState, setState } from 'react';
import { View, Text, AppRegistry, StatusBar, Image, TouchableOpacity,} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';




const ButtonNext = ({
  disabled = false,
  onPress = () => null,
  style = {},
  styleType = '',
  gradientColors = null,
  isLoading = false,
  text = "",
  icon = null,
  iconStyle = {}
}) => {
  return(
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}
      style={styles.selectCountry}>
    <Text style={styles.textCountry}>
    {text}
    </Text>
   
    </TouchableOpacity>
  )
}





const styles = ScaledSheet.create({
  selectCountry: {
    marginTop: '45@ms',
    height: '50@ms',
    borderRadius: '10@ms',
    borderColor: '#4486FF',
    borderWidth: '2@ms',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4486FF',
  },
  textCountry: {
    color: '#fff',
    fontSize: '17@ms',
  },
  imgArrow: {
    resizeMode: 'contain',
    width: '13@ms',
    height: '8@ms',
    marginLeft: '14@ms',
  }
})


export default ButtonNext