import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import CheckBox from '../button/check-box'
import ButtonNext from '../button/button-next'
import { Routes } from '../navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const SafetyLevel = ({ navigation, route }) => {

  const { num, data } = route.params;

  let maxId = Math.random(12 + 2)

  const setObjectValue = async () => {
    let history = await AsyncStorage.getItem('safetyLevel')
    if (history) {
      history = JSON.parse(history)
    };
    const _history = history || []
    const newHistory = [
      ..._history,
      {
        id: maxId++,
        value: num,
        title: moment().format('DD.MM.YYYY')
      }
    ]
    try {
      await AsyncStorage.setItem('safetyLevel', JSON.stringify(newHistory))
      navigation.navigate(Routes.ChoseSituation)
    } catch (e) {
      // save error
      console.log('error')
    }
  }

  const prosent = () => {
    if (num >= '90') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.safeltyText, { color: '#4CD964' }]}>Safety level is excellent</Text>
            <Image source={require('../image/icon/greenSafety.png')} style={styles.blockImg} />
          </View>
          <Text style={[styles.safeltyNumber, { color: '#4CD964' }]}>{num}%</Text>
        </View>
      )
    } else if (num >= '80') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.safeltyText, { color: '#FFCC00' }]}>Safety level is excellent</Text>
            <Image source={require('../image/icon/yellowSafety.png')} style={styles.blockImg} />
          </View>
          <Text style={[styles.safeltyNumber, { color: '#FFCC00' }]}>{num}%</Text>
        </View>
      )
    } else if (num >= '65') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.safeltyText, { color: '#FF9900' }]}>Safety level is excellent</Text>
            <Image source={require('../image/icon/orangeSafety.png')} style={styles.blockImg} />
          </View>
          <Text style={[styles.safeltyNumber, { color: '#FF9900' }]}>{num}%</Text>
        </View>
      )
    } else if (num >= '50') {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.safeltyText, { color: '#FF0000' }]}>Safety level is excellent</Text>
            <Image source={require('../image/icon/redSafety.png')} style={styles.blockImg} />
          </View>
          <Text style={[styles.safeltyNumber, { color: '#FF0000' }]}>{num}%</Text>
        </View>
      )
    }
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
      <View style={[styles.checkContainer, !data[12] && { opacity: 0.7 }]} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../image/icon/hand.png')} style={styles.checkImg} />
          <Text>Gloves</Text>
        </View>
        <CheckBox checked={data[12]} />
      </View>
      <View style={styles.line}></View>
      <View style={[styles.checkContainer, !data[18] && { opacity: 0.7 }]} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../image/icon/man.png')} style={styles.checkImg} />
          <Text>Medical mask</Text>
        </View>
        <CheckBox checked={data[18]} />
      </View>
      <View style={styles.line}></View>
      <View style={[styles.checkContainer, !data[10] && { opacity: 0.7 }]} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../image/icon/anti.png')} style={styles.checkImg} />
          <Text>Antiseptik</Text>
        </View>
        <CheckBox checked={data[10]} />
      </View>
      <View style={styles.line}></View>
      <View style={[styles.checkContainer, !data[4] && { opacity: 0.7 }]} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../image/icon/glass.png')} style={styles.checkImg} />
          <Text>Glasses</Text>
        </View>
        <CheckBox checked={data[4]} />
      </View>
      <View style={styles.line}></View>
      <View style={[styles.checkContainer, !data[6] && { opacity: 0.7 }]} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../image/icon/exit.png')} style={styles.checkImg} />
          <Text>Hood</Text>
        </View>
        <CheckBox checked={data[6]} />
      </View>
      <View style={styles.line}></View>
      {prosent()}
      <View style={{ marginHorizontal: 30 }}>
        <ButtonNext
          text={'Got it'}
          onPress={setObjectValue}
          icon={require('../image/icon/doneIcon.png')}

        />
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
    paddingHorizontal: '20@ms'
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
  blockImg: {
    resizeMode: 'contain',
    width: '20@ms',
    height: '20@ms',
    marginLeft: '12@ms',
  },
  safeltyText: {
    fontSize: '15@ms',
    color: '#4CD964',
    marginVertical: '15@ms'
  },
  safeltyNumber: {
    fontSize: '25@ms',
    color: 'black'
  },
  backImg: {
    resizeMode: 'contain',
    width: '12@ms',
    height: '21@ms',
    marginLeft: '15@ms',
    marginTop: '20@ms'
  }
})

export default SafetyLevel