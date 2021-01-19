import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import TopBar from '../../components/topbar'
import {TopTab} from '../../components/booklist/index'

const BookList = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/img/booklist.jpg')} style={styles.image}>
                <TopBar />
                <View style={styles.header}>
                    <Text style={styles.text}>Your</Text>
                    <Text style={styles.text}>Booklist.</Text>
                </View>
                    <View style={styles.body}>
                            <TopTab />
                    </View>
            </ImageBackground>
        </View>
    )
}

export default BookList

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 190,
        resizeMode: "cover",
        justifyContent: "center"
    },
    header: {
        height: 110,
        paddingHorizontal:36,
        justifyContent:'center',
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal:17,
        paddingTop:8
    },
    text:{
        fontSize:32,
        color:'white',
        fontWeight:'700',
    }
})
