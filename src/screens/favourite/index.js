import React from 'react'
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native'
import Item from '../../components/favourite/item'

//Di sini akan menampilkan item favorite yang user pilih dari listing.

const Favourite = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favourite</Text>
                <Text style={styles.subtitle}>What are you waiting for? Let's book it!</Text>
            </View>
            <View style={styles.containerImage}>
                <ImageBackground style={styles.image} source={require('../../assets/img/favbg.png')} />
            </View>
            {/* Item */}
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <Item />
                <Item />
                <Item />
            </ScrollView>
            {/* end item */}
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
        marginTop: 32,
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
    containerImage:{
        height:110,
    },
    image: {
        flex: 1,
        height: 110,
        resizeMode: "cover",
        justifyContent: "center",
        marginVertical: 10,
        padding: 17,
    },
    body: {
        flex: 1,
        paddingHorizontal: 17,
        marginTop:17,
    }
})
