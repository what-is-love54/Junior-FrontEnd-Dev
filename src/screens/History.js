import React, { useState, useEffect } from 'react';
import { View, Image, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { memo } from 'react';
import { useCallback } from 'react';


const History = () => {

  const [dataArray, setDataArray] = useState([])


  const getMyObject = async () => {
    try {
      const data = await AsyncStorage.getItem('safetyLevel')
      setDataArray(JSON.parse(data))
    } catch (e) {
      // read error
      console.log('error')
    }
  }

  useEffect(() => {
    getMyObject()
  }, []);

  const renderItem = (item) => (
    <Item title={item.title} value={item.value} />
  );

  const Item = ({ title, value }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line}></View>
      <Text style={styles.title}>{value}%</Text>
      <Image source={require('../image/icon/timeIcon.png')} style={styles.timeImg} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar
          barStyle='dark-content'
          translucent
          backgroundColor='transparent'
        />
      </View>
      <Text style={styles.upText}>My safety history</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../image/safetyHistory.png')} style={styles.bookImg} />
      </View>
      <Text style={styles.historyText}>History</Text>
      <ScrollView style={styles.flatContainer}>
        {
          dataArray && dataArray.map((item) => renderItem(item))
        }
      </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  bookImg: {
    resizeMode: 'contain',
    width: '88@ms',
    height: '88@ms',
    marginVertical: '20@ms'
  },
  upText: {
    fontSize: '17@ms',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10@ms'
  },
  historyText: {
    fontSize: '17@ms',
    marginVertical: '20@ms',
    marginLeft: '60@ms',
    fontWeight: 'bold',
  },
  flatContainer: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: '20@ms',
    marginHorizontal: '16@ms',
  },
  title: {
    fontSize: '17@ms',
  },
  line: {
    width: '32@ms',
    height: '2@ms',
    backgroundColor: '#000',
    marginHorizontal: '25@ms'
  },
  timeImg: {
    resizeMode: 'contain',
    width: '15@ms',
    height: '15@ms',
    marginLeft: '45@ms'
  }
});

export default memo(History)