import { View, Text, ImageBackground, Image} from 'react-native'
import React from 'react'
import first from "@/assets/45c1d161401c3ac7129beb9e3765575751904459.jpg"
import loading from '@/assets/Sliding.png'
const OnBoardingOne = () => {
  return (
    <ImageBackground source={first} style={{width:"50.5%"}}>
     <Text style={{marginLeft:300,marginBottom:300,color:"#ACACAC"}}>Skip</Text>
     <Text style={{fontWeight:600, fontSize:20,color:'#FFFFFF',marginTop:70}}>BEST BOOKING APP</Text>
     <Text style={{color:"#ACACAC",flexWrap:'wrap-reverse',}}>Explore the bext booking app to meet the ExtraOrdinary</Text>
     <Image source={loading} style={{height:14,marginTop:50,marginLeft:80}}/>
    </ImageBackground>
  )
}

export default OnBoardingOne