import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Voucher = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <View style={styles.line2}>
                    <Image style={styles.star} source={require('../../assets/img/star.png')} />
                    <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />
                    {/* nama voucher, deskripsi, dan persenan diubah sesuai program */}
                    <Text style={styles.title}>Voucher Name</Text>
                    <View style={styles.desc}>
                        <Text style={{ color: 'white' }}>Voucher Description</Text>
                    </View>
                    <View style={styles.dis}>
                        <Text style={{ color: 'white', fontSize: 18, marginTop:4}}> Discount 10%</Text>
                        <View style={styles.button}>
                            <Text style={{ color: 'white', fontSize: 12 }}>Use Voucher</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Voucher

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: 320,
        height: 160,
        borderRadius: 10,
        // backgroundColor: '#2f2038',
        backgroundColor:'#9a00c9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line1: {
        marginVertical: 8,
        width: 312,
        height: 152,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#008fcc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line2: {
        marginVertical: 8,
        width: 304,
        height: 144,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#9a00c9',
        padding: 8
    },
    logo: {
        width: 58.03,
        height: 18
    },
    star: {
        width: 70,
        height: 70,
        position: 'absolute',
        alignSelf: 'flex-end',
        margin: 8,
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    desc: {
        height: 50,
        width: 200
    },
    dis: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 90,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#008fcc',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
