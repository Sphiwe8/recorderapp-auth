import { React, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import SignUp from './components/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/login';

import AudioRec from './components/audio';

import WelcomePage from './components/welcome';

// You can import from local files

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Log in" component={Login} />
        <Stack.Screen name="Sign up" component={SignUp} />
        <Stack.Screen name="Recorder" component={AudioRec} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

 container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
