import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen  name="splash" />
        <Tabs.Screen name="file" />
        <Tabs.Screen name="search" />
        <Tabs.Screen name="location" />
        <Tabs.Screen name="profile" />
        
    </Tabs>
    
  )
}

export default TabLayout

const styles = StyleSheet.create({})