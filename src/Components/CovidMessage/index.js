import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        If you don't have an Android device available to test with, we recommend
        using the default emulator that comes with Android Studio. If you run
        into any problems setting it up, follow the steps in this guide.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
