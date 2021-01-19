import React from 'react'
import { StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {LastBooking, OngoingBooking} from './index'

const Tab = createMaterialTopTabNavigator();

function TopTab() {
  return (
    <Tab.Navigator initialRouteName="Last" tabBarOptions={{activeTintColor: '#482d59', indicatorStyle:{backgroundColor:'#482d59'}, labelStyle: { fontSize: 12, fontWeight:'700' },}}>
      <Tab.Screen name="Last Booking" component={LastBooking} />
      <Tab.Screen name="Ongoing" component={OngoingBooking} />
    </Tab.Navigator>
  );
}

export default TopTab

const styles = StyleSheet.create({})
