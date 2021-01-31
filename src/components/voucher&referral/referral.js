import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Clipboard from '@react-native-community/clipboard'

//referral code dipakai untuk daftar. akun dengan referral code mendapat diskon 10% untuk 3 transaksi pertama
//akun yang referral code nya dipakai (punya referral) mendapat voucher diskon 10% untuk tiap akun yg pakai referral code nya

const Referral = () => {

    const copyToClipboard = () => {
        Clipboard.setString('Ini code'); //akan ada referral code di sini
        Alert.alert("Copied to Clipboard!", "Share your code to get extra discount.");
    };

    return (
        <View style={styles.bodyR}>
            <Text>Share your referral code to your friends {"\n"}to get extra discount!</Text>
            <View style={styles.ref}>
                {/* text ini harusnya auto linked sama apa yg di setString */}
                <Text style={styles.textR}>Ini Code</Text>
                <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
                    <Text style={{ color: 'white' }}>Copy your code!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Referral

const styles = StyleSheet.create({
    bodyR: {
        marginTop: 16,
    },
    textR: {
        fontSize: 28,
        color: '#1c1c1c',
        fontWeight: 'bold',
    },
    ref: {
        marginTop: 8,
        paddingRight: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        height: 30,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#482d59',
    },
})
