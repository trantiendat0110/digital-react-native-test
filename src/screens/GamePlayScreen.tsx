import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import GamePlay from '../features/GamePlay/GamePlay';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GamePlayScreen = ({ navigation }: any) => {
  const { resultGame } = useSelector((state: RootState) => state.gamePlays)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={[styles.background]}
      >
        {resultGame ? <View style={styles.overlay}></View> : null}
        <GamePlay></GamePlay>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default GamePlayScreen;
