import { View, Text, ImageBackground,Image } from 'react-native'
import React from 'react'
import back from '@/assets/4af71af22ef9fb0e3a96328e866e8311d18619cd.jpg'
import loading from"@/assets/Sliding.png"
const OnBoardingThree = () => {
  return (
   <ImageBackground source={back} style={{width:"50.5%",height:600}}>
    <Text style={{marginLeft:300}}>Skip</Text>
     <Text style={{fontWeight:700, fontSize:28,color:'#FFFFFF',marginTop:440}}>Book Near You</Text>
     <Text style={{color:"#ACACAC"}}>Explore the bext booking app to meet the ExtraOrdinary</Text>
     <Image source={loading} style={{marginTop:30, marginLeft:90}} />
   </ImageBackground>
  )
}

export default OnBoardingThree