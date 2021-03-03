import React from 'react';
import {Image} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const CheckIcon = () => <Image source={require('../image/checkIcon.png')} style={styles.imgCheck} />


const styles = ScaledSheet.create({
  imgCheck: {
    width: '20@ms',
    height: '20@ms',
  }
})


export default CheckIcon