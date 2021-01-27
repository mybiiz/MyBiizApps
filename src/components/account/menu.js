import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const MenuAcc = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 10 }}>
            <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('Pengaturan') }}>
                <Text style={styles.text}>Settings</Text>
                <Icon name='settings-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Voucher & Referral</Text>
                <Icon name='barcode-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Privacy Policy</Text>
                <Icon name='shield-outline' size={23} style={{ color: '#1c1c1c' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('https://wa.me/6285155330197') }}>
                <Text style={styles.text}>Help</Text>
                <Icon name='chatbox-ellipses-outline' size={23} style={{ color: '#1c1c1c' }} />
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
