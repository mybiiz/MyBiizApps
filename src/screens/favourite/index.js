import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Item from '../../components/favourite/item'

const Favourite = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favourite</Text>
                <Text style={styles.subtitle}>What are you waiting for? Let's book it!</Text>
            </View>
                <ImageBackground style={styles.image} source={require('../../assets/img/favbg.png')}>
                <View style={styles.body}>
                    <Item />
                </View>
                </ImageBackground>
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 10,
        marginLeft: 17,
        paddingBottom: 5,
        height: 55,
        borderBottomWidth: 1,
        borderColor: '#1c1c1c'

    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1c1c1c'
    },
    subtitle: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#1c1c1c'
    },
    image: {
        flex: 1,
        height:120,
        resizeMode: "cover",
        justifyContent: "center",
        marginVertical:10,
        opacity:0.8
    },
    body:{
        padding:17
    }
})
