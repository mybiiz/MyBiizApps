import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingItem from '../../components/setting/item'


const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={styles.text}>Notification</Text>
                    <SettingItem name='Push Notification' />
                    <SettingItem name='Email Notification' />
                    <SettingItem name='SMS Notification' />
                </View>
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor: '#e8e8e8',

    },
    header: {
        height: 64,
        marginTop: 32,
    },
    headerText: {
        fontSize: 28,
        color: '#1c1c1c',
        fontWeight: 'bold',

    },
    body: {
        flex: 1,
        marginTop: 8,
        paddingHorizontal: 17,
    },
    text: {
        fontSize: 20,
        color: '#1c1c1c',
        marginVertical: 10,
        fontWeight: 'bold'
    }
})
