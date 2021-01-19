import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/icons/logo.png')}/>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container:{
        height:54,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:83.03,
        height:28
    }
})
