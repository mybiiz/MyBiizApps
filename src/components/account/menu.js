import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MenuAcc = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
        </View>
    )
}

export default MenuAcc

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginHorizontal: 8,
        marginVertical:8,
        backgroundColor: 'red'
    }
})
