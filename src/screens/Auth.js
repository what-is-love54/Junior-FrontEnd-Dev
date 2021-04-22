import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Routes } from '../navigation/Routes';
import { ScaledSheet } from 'react-native-size-matters';

const ENTRIES1 = [
  {
    title: 'Stay safe during the pandemic',
    subtitle: 'Control having the list of necessary things in different satuations',
    illustration: require('../image/show1.png'),
    button: 'Next'
  },
  {
    title: 'Check your security level',
    subtitle: 'Be honest with yourself and take care of you dearest&nearest',
    illustration: require('../image/show2.png'),
    button: 'Next'
  },
  {
    title: 'Find advice and recommendations',
    subtitle: 'To Stay Safe when things around are complicated',
    illustration: require('../image/show3.png'),
    button: 'Get started'
  },
];
const { width: screenWidth } = Dimensions.get('window');

const Auth = ({ props, navigation }) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goToWelcome = () => navigation.navigate(Routes.Welcome)
  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <>
        <View style={styles.item}>
          <ParallaxImage
            source={item.illustration}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.2}
            {...parallaxProps}
          />
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <TouchableOpacity>
          <Text style={styles.nextButton} onPress={item.button === 'Next' ? goForward : goToWelcome} >{item.button}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ height: StatusBar.currentHeight }}>
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      </View>
      <TouchableOpacity onPress={goToWelcome}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth - 30}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>

    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain'
  },
  skipText: {
    textAlign: 'right',
    fontSize: 17,
    marginRight: 16,
    marginBottom: 30
  },
  title: {
    fontSize: '35@ms',
    fontWeight: 'bold',
    marginTop: '35@ms'
  },
  subtitle: {
    fontSize: '17@ms',
    marginTop: '25@ms'
  },
  nextButton: {
    color: '#4486FF',
    textAlign: 'right',
    marginRight: '32@ms',
    fontSize: '17@ms',
    marginTop: '30@ms'
  }
});

export default Auth;