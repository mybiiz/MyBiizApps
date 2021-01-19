import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import { Item } from './index'

const LastBooking = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ScrollView>
        </View>
    )
}

export default LastBooking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:8
    }
})
