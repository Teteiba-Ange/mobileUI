import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import ONTo from "@/assets/54eb658bcf70115c69623de3e37f3ef80d3938cf.jpg"
import { Image } from 'react-native'
import loading from "@/assets/Sliding.png"
const OnBoardingTwo = () => {
  return (
    <ImageBackground source={ONTo}>
        <View style={{borderWidth:1,borderColor:"yellow"}}>
    <Text style={{fontWeight:700, fontSize:33,color:'White'}}>Events with Love</Text>
    <Text style={{color:"#ACACAC"}}>Explore the bext booking app to meet the ExtraOrdinary</Text>
        </View>
        <Image source={loading}/>
    </ImageBackground>
  )
}

export default OnBoardingTwo