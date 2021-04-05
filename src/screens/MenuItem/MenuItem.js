import React, { memo } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
// utils
import { ScaledSheet } from 'react-native-size-matters';

const MenuItem = ({
  title = '',
  imageSource = '',
  type = '',
  notificationCount = '',
  onPress = () => { },
  backgroundColor = '#4486FF',
  style = {}
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.mainContainer}
  >
    <Image
      source={imageSource}
      resizeMode='contain'
      style={styles.image}
    />
  </TouchableOpacity>
);

const styles = ScaledSheet.create({
 
});

export default MenuItem;