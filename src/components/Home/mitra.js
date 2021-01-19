import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';

class Banner extends Component{
    render(){
        return(
            <View style={styles.boxbanner}>
                <View style={{flex:1}}>
                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imagebanner} source={this.props.imageUri}>
                        <Text style={styles.text1}>Join us as a Partner!</Text>
                        <Text style={styles.text1}>Get the benefits!</Text>
                        <Text style={styles.text2}>Become a partner with us, nothing to lose!</Text>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
export default Banner;

const styles=StyleSheet.create({
boxbanner:{
    height:110,
    width:326,
    marginVertical:10
},
imagebanner:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover',
    paddingLeft:128,
    justifyContent:'center'
},
text1:{
    fontSize:16,
    color:'white',
    fontStyle:'italic',
    fontWeight:'700'
},
text2:{
    fontSize:10,
    color:'white',
    fontStyle:'italic'

}
});