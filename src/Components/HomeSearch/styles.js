import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin:10,
        padding:10,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText:{
        fontSize:20,
        fontWeight: '600',
        color: '#535353'
    },
    timeContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    row:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#b3b3b3',
    },
    iconContainer:{
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    destinationText:{
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
    },
})

export default styles

