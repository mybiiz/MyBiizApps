import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import TopBar from '../../components/topbar'
import { TopTab } from '../../components/booklist/index'

const BookList = () => {
    return (
        <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../assets/img/account.jpg')} style={styles.image}>
                    <TopBar />
                    <View style={styles.header} />
                    <View style={styles.photoContainer}>
                        <Image />
                    </View>
                    <View style={styles.body}>

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
        justifyContent: "center",
    },
    header: {
        height: 50,
        paddingHorizontal: 36,
        justifyContent: 'center',
    },
    photoContainer:{
        width:100,
        height:100,
        borderRadius:100,
        padding:8,
        alignSelf:'center',
        backgroundColor:'red'
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 17,
        paddingTop: 8,
    },
    text: {
        fontSize: 32,
        color: 'white',
        fontWeight: '700',
    }
})
