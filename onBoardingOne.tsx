import { View, Text, ImageBackground, Image} from 'react-native'
import React from 'react'
import first from "@/assets/45c1d161401c3ac7129beb9e3765575751904459.jpg"
import loading from '@/assets/Sliding.png'
const OnBoardingOne = () => {
  return (
    <ImageBackground source={first}>
     <Text style={{marginLeft:400,marginBottom:300}}>Skip</Text>
     <Text style={{fontWeight:700, fontSize:33,color:'White'}}>BEST BOOKING APP</Text>
     <Text style={{color:"#ACACAC"}}>Explore the bext booking app to meet the ExtraOrdinary</Text>
     <Image source={loading}/>
    </ImageBackground>
  )
}

export default OnBoardingOne