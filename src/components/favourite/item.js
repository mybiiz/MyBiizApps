import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const Item = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/img/2.jpg')} />
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:250,
        backgroundColor: 'black',
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})
