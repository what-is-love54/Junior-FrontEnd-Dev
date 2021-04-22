import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Routes } from '../navigation/Routes';

const ChoseSituation = ({ navigation }) => {

  const goToSafety = () => navigation.navigate(Routes.YourSafety);
  const goToPsyhology = () => navigation.navigate(Routes.Psyhology)

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      </View>
      <Text style={styles.upText}>Choose your situation</Text>
      <View style={styles.midleTextContainer}>
        <Text style={styles.midleText}>
          You can choose what you will do in the near future
    </Text>
        <Image source={require('../image/checkIcon.png')} style={styles.checkIcon} />
      </View>
      <View style={styles.allMenu}>
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <TouchableOpacity style={styles.menu} onPress={goToSafety}>
              <Image source={require('../image/icon/Dog.png')} style={styles.imgChoose} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>I’m going to walk my dog</Text>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity style={styles.menu} onPress={goToPsyhology} >
              <Image source={require('../image/icon/Home.png')} style={styles.imgChoose} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>I stay at home today</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <TouchableOpacity style={styles.menu} onPress={goToSafety}>
              <Image source={require('../image/icon/ShoppingBag.png')} style={styles.imgChoose} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>I’m going to the shop</Text>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity style={styles.menu} onPress={goToSafety}>
              <Image source={require('../image/icon/Pharmacy.png')} style={styles.imgChoose} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>I’m going to the pharmacy</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <TouchableOpacity style={styles.menu} onPress={goToSafety}>
              <Image source={require('../image/icon/Walk.png')} style={styles.imgChoose} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>I’m going for a walk</Text>
          </View>
          <View style={styles.menuItem}>
            <TouchableOpacity style={styles.menu} onPress={goToSafety}>
              <Image source={require('../image/icon/Icon.png')} style={styles.imgChoose} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>I’m visiting my friends</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  upText: {
    fontSize: '17@ms',
    textAlign: 'center',
    marginTop: '30@ms',
    fontWeight: 'bold'
  },
  midleTextContainer: {
    alignItems: 'center',
    marginTop: '22@ms'
  },
  midleText: {
    fontSize: '15@ms',
    maxWidth: '230@ms',
    textAlign: 'center'
  },
  menu: {
    backgroundColor: '#4486FF',
    width: '80@ms',
    height: '80@ms',
    borderRadius: '10@ms',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    flexDirection: 'row',
    marginVertical: '10@ms',
    justifyContent: 'space-around',
  },
  imgChoose: {
    resizeMode: 'contain',
    width: '41@ms',
  },

  menuItem: {
    maxWidth: '110@ms',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkIcon: {
    resizeMode: 'contain',
    width: '25@ms'
  },
});

export default ChoseSituation