import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
 Button
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import CheckIcon from '../image/checkIcon';


const RadioButton = ({
  onChange = () => null,
  checked = false,
  item = null,
  text = ''
}) => {
  const onHandleChange = () => onChange(item);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onHandleChange}
    >
      <View style={styles.radioCircle}>
        {checked && <CheckIcon style={styles.imgCheck} />}
      </View>
      { checked ?
        <Text style={styles.radioText}>
          {text}
        </Text>
        :
        <Text style={styles.radioText}>
          {text}
        </Text>
      }
    </TouchableOpacity>
  );
}


const styles = ScaledSheet.create({
  container: {
    marginBottom: '10@ms',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100@ms'
  },
  radioText: {
    paddingLeft: '2@ms',
    fontSize: 20,
  },
  radioCircle: {
    height: '20@ms',
    width: '20@ms',
    borderRadius: 50,
    borderWidth: '3@ms',
    borderColor: '#D8D8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RadioButton;
