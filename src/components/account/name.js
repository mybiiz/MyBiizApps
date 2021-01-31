import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Name = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Name */}
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                {/* Link */}
                <Text style={styles.profile}>View Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Name

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: "#1c1c1c"
    },
    profile: {
        fontSize: 14,
        color: "purple"
    }
})

