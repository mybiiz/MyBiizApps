import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Name = () => {
    return (
        <View style={styles.container}>
            {/* Name */}
            <Text style={styles.name}>John Smith</Text>
            {/* Link */}
            <Text style={styles.profile}>View Profile</Text>
        </View>
    )
}

export default Name

const styles = StyleSheet.create({
    container:{
        marginVertical:8,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },
    name:{
        fontSize:18,
        fontWeight:'700',
        color:"#1c1c1c"
    },
    profile:{
        fontSize:14,
        color:"purple"
    }
})

