import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/image/t.png')}
        resizeMode="contain"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  logoContainer: {

    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 600,
    height: 280, 
    bottom: 80,
    left:10
   
  },
});