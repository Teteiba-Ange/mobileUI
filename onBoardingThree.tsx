import { View, Text, ImageBackground,Image } from 'react-native'
import React from 'react'
import back from '@/assets/4af71af22ef9fb0e3a96328e866e8311d18619cd.jpg'
import loading from"@/assets/Sliding.png"
const OnBoardingThree = () => {
  return (
   <ImageBackground source={back}>
    <Text style={{marginLeft:400,marginBottom:300}}>Skip</Text>
     <Text>Book Near You</Text>
     <Text>Explore the bext booking app to meet the ExtraOrdinary</Text>
     <Image source={loading}/>
   </ImageBackground>
  )
}

export default OnBoardingThree