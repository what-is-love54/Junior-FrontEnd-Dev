import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import moment from 'moment';
import ButtonNext from '../button/button-next';
import { Routes } from '../navigation/Routes';

const Home = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({})
  const { country } = route.params;
  const date = moment().format('DD.MM.YYYY');
  const goToChoseSituation = () => navigation.navigate(Routes.ChoseSituation);

  async function getData(url = '') {
    const response = await fetch(url, {
      method: 'GET',
    });
    return await response.json()
  }

  useEffect(() => {
    getData('https://api.covid19api.com/summary')
      .then((data) => {
        setData(data.Countries)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    findCountry();
  }, [data]);

  const findCountry = () => {
    let myCountry = data?.find(item => item.Country === country)
    setCurrentCountry(myCountry)
  };

  const CovidInfo = () => (
    <>
      <View style={styles.infoContainer}>
        <Text style={styles.textStatistics}>Total</Text>
        <Text style={styles.textStatistics}>{currentCountry?.TotalConfirmed}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textStatistics}>Suspects</Text>
        <Text style={styles.textStatistics}>{currentCountry?.NewConfirmed}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textStatistics}>Lethal</Text>
        <Text style={styles.textStatistics}>{currentCountry?.TotalDeaths}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textStatistics}>Recover</Text>
        <Text style={styles.textStatistics}>{currentCountry?.TotalRecovered}</Text>
      </View>
    </>
  )

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar
          barStyle='dark-content'
          translucent
          backgroundColor='transparent'
        />
      </View>
      <View style={styles.containerLogo}>
        <Image source={require('../image/boot-splash/logo.png')} style={styles.imgLogo} />
      </View>
      <Text style={styles.textInfo}>
        Covid-19 is an infectious disease.
    </Text>
      <Text style={styles.textInfoNext}>
        Causes respiratory illness with symptoms such as a cough, fever,
        and in more severe cases, difficulty breathing.
    </Text>
      <Text style={styles.midText}>
        Your cool head is effective defence
    </Text>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../image/staySelf.png')} style={styles.imgStay} />
        <Text style={styles.data}>COVID-19 </Text>
        <Text style={styles.data}> {country}  {date}</Text>
      </View>
      {isLoading ? <ActivityIndicator size="large" color='blue' style={styles.horizontal} /> : <CovidInfo />}
      <View style={{ marginTop: 30 }}>
        <ButtonNext
          text={'I want to stay safe'}
          icon={require('../image/icon/loveIcon.png')}
          onPress={goToChoseSituation}
        />
      </View>
    </View>
  )
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '30@ms'
  },
  containerLogo: {
    alignItems: 'center',
    marginTop: '25@ms'
  },
  imgLogo: {
    width: '167@ms',
    height: '50@ms',
    resizeMode: 'contain',
  },
  textInfo: {
    textAlign: 'center',
    fontSize: '15@ms',
    marginTop: '30@ms',
  },
  textInfoNext: {
    textAlign: 'center',
    fontSize: '15@ms',
  },
  midText: {
    textAlign: 'center',
    marginTop: '20@ms',
    fontSize: '15@ms',
    color: '#4CD964'
  },
  data: {
    textAlign: 'center',
    fontSize: '17@ms',
    fontWeight: 'bold',
  },
  imgStay: {
    height: '80@ms',
    width: '80@ms',
    marginTop: '50@ms',
    marginBottom: '20@ms'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '6@ms',
    marginHorizontal: '70@ms',
  },
  textStatistics: {
    marginTop: '5@ms',
    fontSize: '13@ms',
    color: '#666666'
  },
  horizontal: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
});

export default Home