import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { resetGame } from '../GamePlay/GamePlaySlice';

export default function ResultGame() {
  const GamePlays = useSelector((state: RootState) => state.gamePlays);
  const dispatch = useDispatch();
  const restartGame = () => {
    dispatch(resetGame());
  }
  return (
    <View style={styles.gameOverScreen}>
      <Image source={!GamePlays.itGame ? require('../../assets/you-lose.png') : require('../../assets/you-win.png')}></Image>
      <TouchableOpacity style={styles.restartText} onPress={restartGame}>
        <Image source={require('../../assets/tap-to-restart.png')}></Image>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({

  gameOverScreen: {
    zIndex: 3,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red',
  },
  restartText: {
    marginBottom: -100,
    marginTop: 70,
  },
});