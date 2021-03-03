import React, { useState, setState } from 'react';
import { View, Text, AppRegistry, StatusBar, Image, TouchableOpacity,} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';




const Button = ({
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
    <Image source={require('../image/arrow.png')} style={styles.imgArrow} />
    </TouchableOpacity>
  )
}





const styles = ScaledSheet.create({
  selectCountry: {
    // marginTop: '45@ms',
    height: '50@ms',
    borderRadius: '10@ms',
    borderColor: '#4486FF',
    borderWidth: '2@ms',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCountry: {
    color: '#4486FF',
    fontSize: '17@ms',
  },
  imgArrow: {
    resizeMode: 'contain',
    width: '13@ms',
    height: '8@ms',
    marginLeft: '14@ms',
  },
})


export default Button