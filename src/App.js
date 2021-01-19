import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#191130'/>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  )
}

export default App
