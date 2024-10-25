import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../screens/StartScreen';
import GamePlayScreen from '../screens/GamePlayScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="home" component={StartScreen} />
        <Stack.Screen name="game-play" component={GamePlayScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
