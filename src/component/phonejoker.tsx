import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PhoneJoker = () => {
    const navigation= useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Telefon Jokerleriniz</Text>
      </View>

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={()=> Alert.alert('Buse Hanım aranıyor...')}>
        <Image
          style={styles.image}
          source={require('../../assets/image/buseorhan.jpg')}
        />
        </TouchableOpacity>
        <Text style={styles.name}>Buse Orhan</Text>
        <Text style={styles.title}>Elektrik ve Elektronik Mühendisi</Text>
        
    
      </View>
       <View style={styles.profileContainer}>
        <TouchableOpacity onPress={()=> Alert.alert('Çağrı Bey aranıyor...')}>
        <Image
          style={styles.image}
          source={require('../../assets/image/leader.jpeg')}
        />
        </TouchableOpacity>
        <Text style={styles.name}> Çağrı Arslan</Text>
        <Text style={styles.title}>ÇAĞRI TEAM LEADER</Text>
        
    
      </View>
       <View style={styles.profileContainer}>
        <TouchableOpacity onPress={()=> Alert.alert('Ustabaşısı aranıyor...')}>
        <Image
          style={styles.image}
          source={require('../../assets/image/ustabasısı.jpeg')}
        />
        </TouchableOpacity>
        <Text style={styles.name}>Yasin Sazak</Text>
        <Text style={styles.title}>USTABAŞISI</Text>
        
    
      </View>

    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    margin:10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
});