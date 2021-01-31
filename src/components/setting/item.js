import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SwitchSet from './switch'

const SettingItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
            <SwitchSet />
        </View>
    )
}

export default SettingItem

const styles = StyleSheet.create({
    container:{
        height:70,
        flexDirection:'row',
        paddingTop:22,
        paddingLeft:8,
        borderBottomColor:'#9c9c9c',
        borderBottomWidth:1,
    },
    text:{
        fontSize:18,
        color:'#1c1c1c',
    }
})