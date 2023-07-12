import { View, Text,TextInput, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles'
const DestinationSearch = () => {
    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(()=>{},[originPlace,destinationPlace])
  return (
    <SafeAreaView>
        <View style={styles.container}>
        <GooglePlacesAutocomplete
            placeholder='Where to? '
            onPress={(data, details = null) => {
                setDestinationPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            }}
            styles={{
                textInput: styles.textInput,
            }}
            fetchDetails
            query={{
                key: 'AIzaSyDfrLYKxx_bHLisGNCT974FtMV6kuy8WDw',
                language: 'vi',
            }}
        />

        <GooglePlacesAutocomplete
            placeholder='Where to? '
            onPress={(data, details = null) => {
                setDestinationPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            }}
            styles={{
                textInput: styles.textInput,
            }}
            fetchDetails
            query={{
                key: 'AIzaSyDfrLYKxx_bHLisGNCT974FtMV6kuy8WDw',
                language: 'vi',
            }}
        />
        </View>
    </SafeAreaView>
  )
}

export default DestinationSearch