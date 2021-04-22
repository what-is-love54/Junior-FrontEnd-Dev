import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
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
  iconStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.selectCountry}>
      <Text style={styles.textCountry}>
        {text}
      </Text>
      <Image source={icon} style={styles.iconImg} />
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  selectCountry: {
    marginTop: '15@ms',
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
  },
  iconImg: {
    resizeMode: 'contain',
    width: '15@ms',
    height: '16@ms',
    marginLeft: '12@ms'
  }
})

export default ButtonNext