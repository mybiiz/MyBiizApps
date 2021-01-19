import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

const Item = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/img/1.jpg')} />
                <Icon style={styles.like} name='heart' size={27} />
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>★ 4.5/5</Text>
                <Text style={styles.infoText}>▼ Surabaya</Text>
                <Text style={styles.infoName}>Kost Pak Fritz Paradis 134</Text>
                <Text style={styles.infoPrice}>Rp 100.000 /night</Text>
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    imageContainer:{
        height:150,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    image:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    like:{
        position:'absolute',
        color:'#CC181F',
        alignSelf:'flex-end',
        paddingRight:5,
        paddingTop: 5
        
    },
    info:{
        paddingTop:8,
        paddingHorizontal:17
    },
    infoText:{
        fontSize:12,
        color:'#482d59'
    },
    infoName:{
        fontSize:16,
        color:'#1c1c1c',
        fontWeight:'700'
    },
    infoPrice:{
        fontSize:16,
        color:'#1c1c1c',
        fontStyle:'italic'
    }

})
