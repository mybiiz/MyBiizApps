import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Deals extends Component{
    render(){
        return(
            <View style={styles.boxcarousel}>
                <View style={{flex:2}}>
                    <Image style={styles.imagecarousel} source={this.props.imageUri}/>
                </View>
                <View style={{paddingTop:4}}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    <Text style={styles.text}>{this.props.price}</Text>
                </View>
            </View>
        );
    }
}
export default Deals;

const styles=StyleSheet.create({
boxcarousel:{
    height:150,
    width:200,
    marginRight:17,
},
imagecarousel:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover',
    borderRadius:10,
},
text:{
    color:'#1c1c1c'
}
});