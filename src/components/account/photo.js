import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        width: 105,
        height: 105,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: -windowHeight * 0.1,

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
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center',
    },
})
