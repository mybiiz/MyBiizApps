import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Item } from './index'

// Di sini memuat semua booking yang masih berjalan.
//Booking berjalan seperti Subscribe Kost dan yg akan datang seperti hotel atau apartment.
//Subscribe selalu ditempatkan paling atas dalam View subscribe
//UpComing booking ditempatkan di bawah nya dan scrollable

const OngoingBooking = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subscribe}>
                <Text style={styles.text}>Subscribes</Text>
                <Item />
                <Item />
            </View>
            <View style={styles.upcoming}>
                <Text style={styles.text}>Upcoming</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:8}}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ScrollView>
            </View>
        </View>
    )
}

export default OngoingBooking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 8
    },
    subscribe: {
        borderBottomWidth: 1,
        borderBottomColor: "#e8e8e8",
    },
    upcoming: {
        paddingTop: 8,
    },
    text: {
        fontSize: 12,
        color: "#9c9c9c",
        fontStyle: 'italic',
        fontWeight: '700',
        marginLeft: 17,
    }
})
