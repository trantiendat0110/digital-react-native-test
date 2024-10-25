import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, Animated, TouchableWithoutFeedback, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import ResultGame from '../ReultGame/ResultGame';
import { loseGame, winGame } from './GamePlaySlice';

export default function GamePlay() {
    const animatedValue1 = useRef(new Animated.Value(0)).current;
    const animatedValue2 = useRef(new Animated.Value(0)).current;
    const animatedValue3 = useRef(new Animated.Value(0)).current;
    const [ballPosition, setBallPosition] = useState(0);
    const GamePlays = useSelector((state: RootState) => state.gamePlays)
    const dipatch = useDispatch()
    useEffect(() => {
        const randomPosition = Math.floor(Math.random() * 3);
        setBallPosition(randomPosition);
    }, [GamePlays]);
    
    useEffect(() => {
        if (!GamePlays.resultGame) {
            animatedValue1.setValue(0);
            animatedValue2.setValue(0);
            animatedValue3.setValue(0);
        }
    }, [GamePlays.resultGame, animatedValue1, animatedValue2, animatedValue3]);

    const getBallLeftPosition = () => {
        switch (ballPosition) {
            case 0:
                return '14%';
            case 1:
                return '47%';
            case 2:
                return '78%';
            default:
                return '20%';
        }
    };
    const handlePress = (animatedValue: any, id: number) => {

        Animated.timing(animatedValue, {
            toValue: -50,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            ballPosition === id ? dipatch(winGame()) : dipatch(loseGame())
        }, 600)
    };

    return (
        <View style={styles.ground}>
            {GamePlays.resultGame ? <ResultGame></ResultGame> : ''}
            <TouchableWithoutFeedback onPress={(e) => handlePress(animatedValue1, 0)}>
                <Animated.Image source={require('../../assets/plastic-cup.png')} style={[styles.cup, { transform: [{ translateY: animatedValue1 }] }]} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={(e) => handlePress(animatedValue2, 1)}>
                <Animated.Image source={require('../../assets/plastic-cup.png')} style={[styles.cup, { transform: [{ translateY: animatedValue2 }] }]} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={(e) => handlePress(animatedValue3, 2)}>
                <Animated.Image source={require('../../assets/plastic-cup.png')} style={[styles.cup, { transform: [{ translateY: animatedValue3 }] }]} />
            </TouchableWithoutFeedback>
            <Image style={[styles.ball, { left: getBallLeftPosition() }]} source={require('../../assets/ball.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    ground: {
        height: '30%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        position: "relative",
        zIndex: 999,
    },
    cup: {
        zIndex: 2,
    },
    ball: {
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute',
        bottom: 10,
        zIndex: 1,
    },
});