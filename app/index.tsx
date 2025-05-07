import { View, Text, ImageBackground,Image,Pressable, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from "@/assets/Logo (1).png"
import under from"@/assets/Rectangle 119.png"
import { router } from 'expo-router'

const Index = () => {
  return (
    <View>
        <ImageBackground source={Logo} style={{marginLeft:400,}}>
        <Text style={{marginTop:80,paddingLeft:100,fontWeight:900,fontSize:30}}> Event</Text>
        <Text style={{paddingLeft:115,fontWeight:900,fontSize:30}}>  GO</Text>
        <Image source={under}  style={{width:"30%",marginTop:450}}/>
      
        </ImageBackground>
        
      
    </View>
  )
}

export default Index