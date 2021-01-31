import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SettingItem from '../../components/setting/item'


const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.text}>Notification</Text>
                        <Text style={styles.desc}>Receive notification about bookings, request to write a review, and others related to your activity on MyBiiz.</Text>
                        <SettingItem name='Push Notification' />
                        <SettingItem name='Email Notification' />
                        {/* SMS set defaultnya false */}
                        <SettingItem name='Text Messages' />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.text}>Promotion</Text>
                        <Text style={styles.desc}>Receive Promotion offer and product updates from MyBiiz.</Text>
                        <SettingItem name='Push Notification' />
                        <SettingItem name='Email' />
                        {/* SMS set defaultnya false */}
                        <SettingItem name='Text Messages' />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.text}>Support</Text>
                        <Text style={styles.desc}>Receive notification about your account, your bookings, legal notification, security adn support, and customer support request.</Text>
                        <SettingItem name='Push Notification' />
                        {/* SMS set defaultnya false */}
                        <SettingItem name='Text Messages' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
        backgroundColor: '#fffafa',

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
        marginTop: 10,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
        color: '#1c1c1c',
        marginTop: 5
    }
})
