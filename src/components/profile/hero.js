import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Photo from './photo'

const Hero = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heroP}>
                <Photo />
            </View>
            <View style={styles.heroN}>
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.name}>John Smith</Text>
            </View>
        </View>
    )
}

export default Hero

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor:'#c9c9c9',
        marginLeft:17,
    },
    heroP: {
        height: 130,
        marginTop: 32,
        paddingHorizontal: 17,
        justifyContent: 'center',
    },
    heroN: {
        flex:1,
        height: 130,
        marginTop: 32,
        paddingLeft:17,
        paddingRight:17,
        justifyContent:'center',
        // backgroundColor:'red'
    },
    hello:{
        fontSize:20,
        fontStyle:'italic',
        color:'#1c1c1c'
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:'#1c1c1c',
        marginLeft:8
    }
})
