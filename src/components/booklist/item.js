import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//source image dapat diganti seperti this.props dan semacamnya.
//rate yg diubah yg 4.5 saja.
//price dan jumlah malam diubah terpisah.
//price akumulasi dari banyaknya malam (price*night)
//mohon bantuannya :')

const Item = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image style={styles.image} source={require('../../assets/img/1.jpg')} />
                <View style={styles.rate}>
                    <Text style={styles.RateText }>★ 4.5/5</Text>
                </View>
            </View>
            <View style={styles.InfoContainer}>
                <Text style={styles.InfoName}>Kost Pak Fritz Paradis 134</Text>
                <Text style={styles.InfoArea}>Surabaya</Text>
                <Text style={styles.InfoPrice}>Rp 100.000 | 1 night</Text>
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        height: 60,
        flexDirection: 'row'
    },
    ImageContainer: {
        width: 100,
        borderRadius: 10,
    },
    rate: {
        backgroundColor: 'rgba(98,65,169,0.76)',
        position: 'absolute',
        padding: 3,
        alignSelf: 'flex-end',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    RateText:{
        fontSize: 12,
        color: 'white'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10,
        justifyContent: 'center',
        position: 'relative'
    },
    InfoContainer:{
        height:60,
        paddingLeft:16,
        paddingTop:3,
    },
    InfoName:{
        fontSize:14,
        color:'#1c1c1c',
        fontWeight:'bold',
    },
    InfoPrice:{
        fontSize:14,
        color:'#1c1c1c',
    },
    InfoArea:{
        fontSize:10,
        color:'#1c1c1c',
        fontStyle:'italic'
    },
})
