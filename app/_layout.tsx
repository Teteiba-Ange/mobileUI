import { View, Text ,Pressable} from 'react-native'
import React from 'react'
import { Stack, router,Tabs } from 'expo-router'

const Layout = () => {
  return (
 <Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name='onBoardingOne' />
    <Tabs.Screen name='onBoardingTwo'/>
    <Tabs.Screen name='onBoardingThree'/>
 </Tabs>
  )
}

export default Layout