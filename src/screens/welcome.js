import React, { useState, setState } from 'react';
import Modal from 'react-native-modal';
import { View, Text, StatusBar, Image, Alert } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import RadioButton from "../button/check-box";
import Button from "../button/button";
import ButtonNext from "../button/button-next";
import { Routes } from '../navigation/Routes';

const item = [
  {
    id: 0,
    value: '1',
    text: 'Under 18'
  },
  {
    id: 1,
    value: '2',
    text: '18-59',
  },
  {
    id: 2,
    value: '3',
    text: '60+',
  },
];

const countryArray = [
  {
    id: 0,
    value: 'England',
  },
  {
    id: 1,
    value: 'Portugal',
  },
  {
    id: 2,
    value: 'Italy',
  },
  {
    id: 3,
    value: 'Bulgaria',
  },
  {
    id: 4,
    value: 'China',
  },
  {
    id: 5,
    value: 'Spain',
  },
  {
    id: 6,
    value: 'Russia',
  },
  {
    id: 7,
    value: 'Poland',
  },

];
const language = [
  {
    id: 0,
    value: 'English',
  },
  {
    id: 1,
    value: 'Portuguese',
  },
  {
    id: 2,
    value: 'Italian',
  },
  {
    id: 3,
    value: 'Bulgarian',
  },
  {
    id: 4,
    value: 'Chinese',
  },
  {
    id: 5,
    value: 'Spanish',
  },
  {
    id: 6,
    value: 'Russian',
  },
  {
    id: 7,
    value: 'Polish',
  },

];

const WelcomeScreen = ({ navigation, route }) => {

  const [age, setAge] = useState(item.value)
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModal, setModal] = useState(false);
  const [country, setCountry] = useState('')
  const [lang, setLang] = useState('')
  console.log(country)
  const selestLanguage = (language) => setLang(language.value);
  const selectCountry = (country) => setCountry(country.value);
  const inc = (item) => setAge(item.value);
  const toggleModal = () => setModalVisible(!isModalVisible);
  const langModal = () => setModal(!isModal);

  const goToHome = () => navigation.navigate('TabNavigator', {
    screen: 'MainHome',
    params: { country },
  });
  const createTwoButtonAlert = () =>
    Alert.alert(
      " ",
      "А НІХУЯ )))",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  const modalCountry = () => (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
    >
      <View style={styles.modalCountry}>
        {
          countryArray.map((el) =>
            <RadioButton
              item={el}
              key={el.id}
              checked={country === el.value}
              onChange={selectCountry}
              text={el.value}
            />
          )
        }
        <Button text={"select country"} onPress={toggleModal} />
      </View>
    </Modal>
  )

  const modalLanguage = () => (
    <Modal
      isVisible={isModal}
      style={styles.modal}
    >
      <View style={styles.modalCountry}>
        {
          language.map((language) =>
            <RadioButton
              item={language}
              key={language.id}
              checked={lang === language.value}
              onChange={selestLanguage}
              text={language.value}
            />
          )
        }
        <Button text={"select language"} onPress={langModal} />
      </View>
    </Modal>
  )

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      </View>
      <View style={styles.containerLogo}>
        <Image source={require('../image/boot-splash/logo.png')} style={styles.imgLogo} />
      </View>
      <Text style={styles.midTextBlack}>Welcome</Text>
      <Text style={styles.midText}>Stay safe</Text>
      <View style={styles.checkBoxContainer}>
        <Text style={styles.selectAge} >Please, select your age</Text>
        <Image source={require('../image/emoji.png')} style={styles.imgEmoji} />
      </View>
      <View style={styles.containerImgPeople}>
        <View>
          {
            item.map((element) =>
              <RadioButton
                item={element}
                key={element.id}
                checked={age === element.value}
                onChange={inc}
                text={element.text}
              />
            )
          }
        </View>
        <Image source={require('../image/people.png')} style={styles.imgPeople} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text={country ? country : 'Select Country'} onPress={toggleModal} />
        {modalCountry()}
      </View>
      <View style={styles.buttonContainer}>
        <Button text={lang ? lang : 'Select Language'} onPress={langModal} />
        {modalLanguage()}
      </View>
      <ButtonNext text={'start'} onPress={country ? goToHome : createTwoButtonAlert} />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '30@ms'
  },
  containerLogo: {
    alignItems: 'center',
    marginTop: '60@ms'
  },
  imgLogo: {
    width: '167@ms',
    height: '55@ms',
    resizeMode: 'contain',
  },
  midText: {
    color: '#4CD964',
    fontSize: '30@ms',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  midTextBlack: {
    color: '#000',
    fontSize: '30@ms',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '20@ms',
  },
  selectAge: {
    marginBottom: '40@ms',
    fontSize: '17@ms',
    color: '#666666',
  },
  checkBoxContainer: {
    marginTop: '30@ms',
    flexDirection: 'row',
  },
  imgEmoji: {
    width: '20@ms',
    height: '20@ms',
    marginLeft: '8@ms',

  },
  containerImgPeople: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgPeople: {
    resizeMode: 'contain',
    width: '210@ms',
    height: '110@ms'
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCountry: {
    backgroundColor: '#fff',
    width: '222@ms',
    height: '382@ms',
    borderRadius: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: '20@ms',
  },
  btnStart: {
    backgroundColor: 'red',
  }
});

export default WelcomeScreen;