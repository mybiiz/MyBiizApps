import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native'
import Area from '../../components/Home/area'
import BannerPromo from '../../components/Home/bannerPromo'
import BannerTop from '../../components/Home/bannerTop'
import Menu from '../../components/Home/menu'
import Deals from '../../components/Home/recommendation'
import Banner from '../../components/Home/mitra'
import TopBar from '../../components/topbar'

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/bg.jpg')} style={styles.image}>
                <TopBar />
                <ScrollView>
                    <View>
                        <BannerTop />
                        {/* Body */}
                        <View style={styles.body}>
                            <Image style={styles.line} source={require('../../assets/icons/line.png')} />
                            <Menu />
                            <BannerPromo />
                            {/* Area */}
                            <Text style={styles.text}>Popular Destinations</Text>
                            <View style={styles.carousel}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Area imageUri={require('../../assets/img/surabaya.jpg')} name="Surabaya" />
                                    <Area imageUri={require('../../assets/img/malang.jpg')} name="Malang" />
                                    <Area imageUri={require('../../assets/img/bali.jpg')} name="Bali" />
                                    <Area imageUri={require('../../assets/img/jakarta.jpg')} name="Jakarta" />
                                </ScrollView>
                            </View>
                            {/* End Area */}
                            {/* Recommendation */}
                            <Text style={styles.text}>Recommendation</Text>
                            <View style={styles.carousell}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Deals imageUri={require('../../assets/img/1.jpg')} name="Home" price="Rp 100" />
                                    <Deals imageUri={require('../../assets/img/2.jpg')} name="Home 1" price="Rp 100" />
                                    <Deals imageUri={require('../../assets/img/3.jpg')} name="Home 2" price="Rp 100" />
                                </ScrollView>
                            </View>
                            {/* End Recommendation */}
                            <Text style={styles.text}>Become a Host!</Text>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://mybiiz.com/html/mitra/mitra.html') }}>
                                <Banner imageUri={require('../../assets/img/mitra.jpg')} />
                            </TouchableOpacity>
                            {/* end banner mitra */}
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    line: {
        marginVertical: 16,
        alignSelf: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 17,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center'
    },
    carousel: {
        height: 180,
        marginTop: 10,
    },
    carousell: {
        height: 150,
        marginTop: 10,
    },
    text: {
        alignSelf: 'baseline',
        fontWeight: '700',
        fontSize: 18,
        color: '#1c1c1c',
        marginTop: 10
    },
    image: {
        flex: 1,
        height:500,
        resizeMode: "cover",
        justifyContent: "center"
      },
})
