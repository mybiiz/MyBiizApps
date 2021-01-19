import React from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Item } from './index'

// Di sini memuat semua booking yang masih berjalan.
//Booking berjalan seperti Subscribe Kost dan yg akan datang seperti hotel atau apartment.
//Subscribe selalu ditempatkan paling atas

const OngoingBooking = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Item />
                <Item />
            </ScrollView>
        </View>
    )
}

export default OngoingBooking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:8
    }
})
