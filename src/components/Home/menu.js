import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Menu = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/icons/hotel.png')} />
                    </View>
                    <Text style={styles.title}>MyHotel</Text>
                </View>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/icons/apt.png')} />
                    </View>
                    <Text style={styles.title}>MyApartment</Text>
                </View>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/icons/kost.png')} />
                    </View>
                    <Text style={styles.title}>MyKost</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/icons/laundry.png')} />
                    </View>
                    <Text style={styles.title}>MyLaundry</Text>
                </View>
                <View style={styles.containerButton}>
                    <View style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/icons/car.png')} />
                    </View>
                    <Text style={styles.title}>MyCar</Text>
                </View>
                <View style={styles.containerButton}>
                </View>
            </View>
        </>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        marginBottom: 10,

    },
    containerButton: {
        width: 80,
        height: 80,
        alignItems: 'center',
        marginHorizontal:8
    },
    button: {
        width: 64,
        height: 64,
        borderRadius: 20,
        backgroundColor: '#482d59',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 36,
        height: 36
    },
    title: {
        fontSize: 12,
        color: '#1c1c1c'
    }
})