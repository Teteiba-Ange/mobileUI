import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import ONTo from "@/assets/54eb658bcf70115c69623de3e37f3ef80d3938cf.jpg"
import { Image } from 'react-native'
import loading from "@/assets/Sliding.png"
const OnBoardingTwo = () => {
  return (
    <ImageBackground source={ONTo} style={{width:"50.5%",paddingTop:20,height:600}}>
    <Text style={{marginLeft:300,color:"#ACACAC"}}>Skip</Text>
    <Text style={{fontWeight:700, fontSize:30,color:'#FFFFFF',marginTop:400}}>Events with Love</Text>
    <Text style={{color:"#ACACAC"}}>Explore the bext booking app to meet the ExtraOrdinary</Text>
        <Image source={loading} style={{marginTop:30, marginLeft:90}}/>
    </ImageBackground>
  )
}

export default OnBoardingTwo