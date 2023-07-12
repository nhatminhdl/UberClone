/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

const HomeMap = () => {
  return (
    <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
            height: 300,
            backgroundColor: "#a0abff",
            justifyContent: 'center',
            alignItems: 'center',
        }}

    >
      <Text>I am a map</Text>
    </View>
  );
};

export default HomeMap;