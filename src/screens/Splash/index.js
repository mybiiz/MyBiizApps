import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/icons/besar.png')} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    logo:{
        width:209.29,
        height:70

    }
})