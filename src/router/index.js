import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/home';
import BookList from '../screens/booklist';
import Favourite from '../screens/favourite';
import Account from '../screens/account';
import Splash from '../screens/Splash';
import Setting from '../screens/setting';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#482d59'}}>
            <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Icon name="home-outline" color={color} size={27} />)}} />
            <Tab.Screen name="Booklist" component={BookList} options={{tabBarLabel: 'Booklist', tabBarIcon: ({ color, size }) => (<Icon name="book-outline" color={color} size={27} />)}} />
            <Tab.Screen name="Favourite" component={Favourite} options={{tabBarLabel: 'Favourite', tabBarIcon: ({ color, size }) => (<Icon name="heart-outline" color={color} size={27} />)}}/>
            <Tab.Screen name="Account" component={Account} options={{tabBarLabel: 'Account', tabBarIcon: ({ color, size }) => (<Icon name="person-outline" color={color} size={27} />)}}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router
