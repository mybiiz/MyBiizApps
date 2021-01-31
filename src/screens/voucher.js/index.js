import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Referral from '../../components/voucher&referral/referral';
import Voucher from '../../components/voucher&referral/voucher';

const VoucherAndReferral = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Voucher & Referral</Text>
                <Text></Text>
            </View>
            <Referral />
            <View style={styles.bodyV}>
                <Text style={styles.text}>Your Vouchers</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Voucher />
                    <Voucher />
                    <Voucher />
                    <Voucher />
                </ScrollView>
            </View>
        </View>
    )
}

export default VoucherAndReferral

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 17,
        paddingTop: 32,
        backgroundColor: '#e8e8e8',
    },
    header: {
        height: 64,
        borderBottomWidth: 1,
        borderColor: '#9c9c9c'
    },
    headerText: {
        fontSize: 26,
        color: '#1c1c1c',
        fontWeight: 'bold',

    },
    bodyV: {
        flex: 1,
        backgroundColor: '#fffafa',
        marginRight: 17,
        marginTop: 32,
        paddingTop: 10,
        paddingHorizontal: 17,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize: 20,
        color: '#1c1c1c',
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf:'baseline'
    }
})
