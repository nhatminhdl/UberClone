/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text} from 'react-native';

import HomeMap from '../../Components/HomeMap';
import CovidMessage from '../../Components/CovidMessage';
import HomeSearch from '../../Components/HomeSearch';

function HomeScreen() {
  return (
    <View>
        <HomeMap />
        {/*Covid Message */}
        <CovidMessage/>
        {/*Button Comp */}
        <HomeSearch/>
    </View>
  )
}

export default HomeScreen;