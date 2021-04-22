import React, { useState } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import CheckBox from '../button/check-box'
import ButtonNext from '../button/button-next'
import CheckIcon from '../image/checkIcon'
import { Routes } from '../navigation/Routes';
import Button from '../button/button';

const YourSafety = ({ navigation, checked }) => {

  const [data, setData] = useState({})

  const onChange = (value) => {
    setData({
      ...data,
      [value]: !data[value],
    })
  };

  let num = 50

  for (let key in data) {
    num += data[key] ? +key : 0;
  }

  const goToSafetyLevel = () => navigation.navigate(Routes.SafetyLevel, { num, data })
  const goToRules = () => navigation.navigate(Routes.Rules)

  const checkArray = () => {
    return (
      <>
        <TouchableOpacity style={styles.checkContainer} onPress={() => onChange('12')} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../image/icon/hand.png')} style={styles.checkImg} />
            <Text>Gloves</Text>
          </View>
          <CheckBox checked={data[12] && <CheckIcon />} />
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.checkContainer} onPress={() => onChange('18')} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../image/icon/man.png')} style={styles.checkImg} />
            <Text>Medical mask</Text>
          </View>
          <CheckBox checked={data[18] && <CheckIcon />} />
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.checkContainer} onPress={() => onChange('10')} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../image/icon/anti.png')} style={styles.checkImg} />
            <Text>Antiseptik</Text>
          </View>
          <CheckBox checked={data[10] && <CheckIcon />} />
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.checkContainer} onPress={() => onChange('4')} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../image/icon/glass.png')} style={styles.checkImg} />
            <Text>Glasses</Text>
          </View>
          <CheckBox checked={data[4] && <CheckIcon />} />
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.checkContainer} onPress={() => onChange('6')} >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../image/icon/exit.png')} style={styles.checkImg} />
            <Text>Hood</Text>
          </View>
          <CheckBox checked={data[6] && <CheckIcon />} />
        </TouchableOpacity>
        <View style={styles.line}></View>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar
          barStyle='dark-content'
          translucent
          backgroundColor='transparent'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <Image source={require('../image/icon/arrowBack.png')} style={styles.backImg} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: -45 }}>
        <Text style={styles.upText}>Check your safety</Text>
        <Image source={require('../image/Heart.png')} style={styles.heartImg} />
      </View>
      <Text style={styles.upText}>Safeties</Text>
      {checkArray()}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text style={styles.greenText}>Everything will be fine</Text>
        <Image source={require('../image/leafIcon.png')} style={styles.greenImg} />
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 30 }}>
        <Button text={'More safety advice'} onPress={goToRules} />
        <ButtonNext text={'Check my safety'} onPress={goToSafetyLevel} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  upText: {
    fontSize: '17@ms',
    marginVertical: '20@ms',
    marginHorizontal: '20@ms'
  },
  heartImg: {
    resizeMode: 'contain',
    width: '50@ms',
    height: '42@ms',
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '20@ms',
  },
  checkImg: {
    resizeMode: 'contain',
    width: '29@ms',
    height: '29@ms',
    marginRight: '10@ms'
  },
  line: {
    marginLeft: '70@ms',
    height: '1@ms',
    backgroundColor: '#EFEFF4',
    marginVertical: '10@ms',
    alignItems: 'center',
    justifyContent: 'center'
  },
  greenText: {
    fontSize: '17@ms',
    color: '#4CD964'
  },
  greenImg: {
    resizeMode: 'contain',
    width: '20@ms',
    height: '20@ms'
  },
  backImg: {
    resizeMode: 'contain',
    width: '12@ms',
    height: '21@ms',
    marginLeft: '15@ms',
    marginTop: '20@ms'
  }
})

export default YourSafety