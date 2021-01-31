import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

function MenuAcc() {

    const navigation = useNavigation();

    return (
        <View style={{ paddingTop: 10 }}>
            {/* Settings */}
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Setting')}>
                <Text style={styles.text}>Settings</Text>
                <Icon name='settings-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            {/* Voucher & Referral */}
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('VoucherAndReferral')}>
                <Text style={styles.text}>Voucher & Referral</Text>
                <Icon name='barcode-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            {/* Privacy & Policy */}
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Privacy Policy</Text>
                <Icon name='shield-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            {/* Help */}
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('https://wa.me/6285155330197') }}>
                <Text style={styles.text}>Help</Text>
                <Icon name='chatbox-ellipses-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            {/* Log Out */}
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Log Out</Text>
                <Icon name='exit-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
        </View>
    )
}

export default MenuAcc

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 8,
        marginVertical: 8,
        paddingRight: 8,
        paddingLeft: 8,
        justifyContent: 'space-between',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 16,
        color: "#1c1c1c",
    }
})
