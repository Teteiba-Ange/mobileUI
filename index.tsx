import { View, Text, ImageBackground,Image } from 'react-native'
import React from 'react'
import Logo from "@/assets/Logo(1).png"
import under from"@/assets/Rectangle 119.png"

const Index = () => {
  return (
    <View>
        <ImageBackground source={Logo}>
        <Text> Event Go</Text>
        <Image source={under}  style={{marginTop:600}}/>
        </ImageBackground>
      
    </View>
  )
}

export default Index