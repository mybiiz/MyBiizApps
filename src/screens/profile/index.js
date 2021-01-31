import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Hero from '../../components/profile/hero';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Hero />
            <View style={styles.body}>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        marginTop:32,
        marginLeft:32,
        fontSize:28,
        fontWeight:'bold',
        color:'#1c1c1c'
    },
    body: {
    }
})
