import React from 'react'
import { StyleSheet, View, Image } from 'react-native'


const Photo = () => {
    return (
        <View style={styles.photoContainer}>
            <Image source={require('../../assets/img/person.jpg')} style={styles.photo} />
        </View>
    )
}

export default Photo

const styles = StyleSheet.create({
    photoContainer: {
        width: 95,
        height: 95,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    photo: {
        width: 90,
        height: 90,
        borderRadius: 100,
        alignSelf: 'center',
    },
})
