/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {registerRootComponent} from 'expo';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';


function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'}/>
      <DestinationSearch />
    </>
  );
}

export default registerRootComponent(App);
