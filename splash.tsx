import { View, Text,Image, FlatList } from 'react-native'
import React from 'react'
import location from '@/assets/Location Icon.png'
import drop from "@/assets/Dropdown Icon.png"
import profile from "@/assets/ProfilePhoto.png"
import { TextInput } from 'react-native'
import search from '@/assets/Search (1).png'
import filre from "@/assets/Filter (4).png"
import music from "@/assets/Music.png"
import sports from "@/assets/Sports.png"
import food from "@/assets/Food.png"
import art from "@/assets/Art.png" 
const Splash = () => {
  return (
    <View>

    <View style={{display:"flex",flexDirection:"row"}}>
      <View style={{display:"flex"}}>
        <Image source={location} />
        <Text>Location</Text>
      </View>
      <View>
        <Text>California,USA</Text>
        <Image source={drop}/> 
      </View>
      <View>
        <Image source={profile} />
      </View>
    </View>
    <View style={{display:"flex"}}>
        <Image source={search}/>
        <TextInput placeholder='Search'  />
        <Image  source={filre}/>
    </View>
    <View style={{display:"flex",flexDirection:"row"}}>
        <Image  source={music}/>
        <Image source={sports}/>
        <Image source={food}/>
        <Image source={art}/>
    </View>
    <View>
      <Text>Explore</Text>
      <Text>See all </Text>
    </View>
    <FlatList data={} renderItem={}  keyExtractor={} />

    
    
    </View>
  )
}

export default Splash