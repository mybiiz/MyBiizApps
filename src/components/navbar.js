import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/home';
import BookList from '../screens/booklist';
import Favourite from '../screens/favourite';
import Account from '../screens/account';

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

export default MainApp
