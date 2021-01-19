import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const BannerTop = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello!</Text>
            <Text style={{fontSize:16, color:'white'}}>Enjoy your day!</Text>
        </View>
    )
}

export default BannerTop

const styles = StyleSheet.create({
    container:{
        width:326,
        height:250,
        marginBottom:10,
        marginHorizontal:17,
        paddingHorizontal:17,
        paddingTop:10,
    },
    text:{
        fontSize:56,
        color:'white',
        fontWeight:'700',
    }
})
