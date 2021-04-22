import React from 'react';
import { SafeAreaView, View, VirtualizedList, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Newsletter`,
  number: index + 1
});

const getItemCount = (data) => 20;

const Item = ({ title, number }) => (
  <>
    <View style={styles.item}>
      <View style={styles.numberContainer}>
        <Text style={styles.numberTitle}>{number}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
);

const Psyhology = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar
          barStyle='dark-content'
          translucent
          backgroundColor='transparent'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}  >
        <Image source={require('../image/icon/arrowBack.png')} style={styles.backImg} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.upText}>Single rules</Text>
      </View>
      <Text style={styles.midText}>Take care of your mental health</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../image/family.png')} style={styles.bookImg} />
      </View>
      <Text style={styles.rulesText}>Advices</Text>
      <SafeAreaView style={styles.container}>
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} number={item.number} />}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: '2@ms',
    borderColor: '#EFEFF4',
    paddingVertical: '15@ms',
    marginLeft: '20@ms'
  },
  title: {
    fontSize: '16@ms',
    color: '#282828',
  },
  numberTitle: {
    fontSize: '16@ms',
    color: '#282828',
  },
  numberContainer: {
    flexDirection: 'row',
    height: '25@ms',
    width: '25@ms',
    borderWidth: '1@ms',
    borderColor: '#282828',
    borderRadius: '8@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10@ms',
  },
  upText: {
    fontSize: '17@ms',
    fontWeight: 'bold',
    // textAlign: 'center',
    marginTop: '-20@ms'
  },
  midText: {
    fontSize: '17@ms',
    textAlign: 'center',
    marginVertical: '20@ms',
    marginHorizontal: '110@ms'
  },
  bookImg: {
    resizeMode: 'contain',
    width: '88@ms',
    height: '88@ms',
    marginVertical: '10@ms'
  },
  rulesText: {
    fontSize: '17@ms',
    marginVertical: '10@ms',
    marginLeft: '20@ms',
    fontWeight: 'bold',
  },
  backImg: {
    resizeMode: 'contain',
    width: '12@ms',
    height: '21@ms',
    marginLeft: '15@ms',
    marginTop: '20@ms'
  }
});

export default Psyhology;