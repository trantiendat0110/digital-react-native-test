import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NavigationProp } from "@react-navigation/native";


interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const StartScreen = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/home-background.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.content}>
          <Image source={require('../assets/logo.png')}></Image>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('game-play')}>
            <Image source={require('../assets/tap-to-play.png')}></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
    backgroundColor: '#d50000',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    marginTop: 52,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default StartScreen;
