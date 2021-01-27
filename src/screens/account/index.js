import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import MenuAcc from '../../components/account/menu';
import Name from '../../components/account/name';
import Photo from '../../components/account/photo';
import TopBar from '../../components/topbar'

const windowHeight = Dimensions.get('window').height;

const BookList = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/img/account.jpg')} style={styles.image}>
                <TopBar />
                <View style={styles.header}/>
                <View style={styles.body}>
                    <Photo />
                    <Name />
                    <MenuAcc />
                    <View style={{marginTop: windowHeight*0.18}}>
                        <Text style={styles.copy}>© MyBiiz 2021</Text>
                    </View>
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
        height: 110,
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
    },
    copy:{
        fontSize:10,
        color:"#8c8c8c",
        fontStyle:'italic',
        alignSelf:'center'
    }
})
