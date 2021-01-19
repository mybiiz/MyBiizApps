import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

class Area extends Component{
    render(){
        return(
            <View style={styles.boxcarousel}>
                <View style={{flex:1}}>
                    <ImageBackground imageStyle={{borderRadius:10}} style={styles.imagecarousel} source={this.props.imageUri}/>
                </View>
                <View style={{paddingTop:4}}>
                    <Text style={{color:'#1c1c1c'}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Area;

const styles=StyleSheet.create({
boxcarousel:{
    height:180,
    width:200,
    marginRight:17
},
imagecarousel:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover',
    borderRadius:10,
},
});