import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from '../components/navbar';
import Splash from '../screens/Splash';
import Setting from '../screens/setting';
import VoucherAndReferral from '../screens/voucher.js';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name="VoucherAndReferral" component={VoucherAndReferral} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router
