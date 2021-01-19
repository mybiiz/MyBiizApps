import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const BannerPromo = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} imageStyle={{ borderRadius: 10 }} source={require('../../assets/img/city.jpg')}>
                <Text style={styles.text}>Enjoy the convenience of living anywhere. </Text>
                <Text style={styles.text}>Finding a room is that easy!</Text>
            </ImageBackground>
        </View>
    )
}

export default BannerPromo

const styles = StyleSheet.create({
    container: {
        width: 326,
        height: 150,
        borderRadius: 10,
        marginHorizontal: 17,
        marginVertical: 10,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10,
        justifyContent:'center',
        paddingLeft:17
    },
    text:{
        fontSize:18,
        fontWeight:'700',
        color:'white'
    }
})
