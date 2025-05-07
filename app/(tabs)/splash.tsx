import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; // Import useState
import location from '@/assets/Location Icon.png';
import drop from '@/assets/Dropdown Icon.png';
import profile from '@/assets/ProfilePhoto.png';
import { TextInput } from 'react-native';
import search from '@/assets/Search (1).png';
import filre from '@/assets/Filter (4).png';
import music from '@/assets/Music.png';
import sports from '@/assets/Sports.png';
import food from '@/assets/Food.png';
import art from '@/assets/Art.png';

type productProps = {
  id: string; // Changed id to string to match your data
  title: string;
  image: any; // 'require' returns a complex object, so 'any' is appropriate here
};

const Splash = () => {
  const [products, setProducts] = useState<productProps[]>([ // Type the products state
    {
      id: '1',
      title: 'My Text',
      image: require('@/assets/image (3).png'),
    },{id:'2',title:'Replica',image:require('@/assets/image (4).png')},{
      id:'3',title:'three',image:require('@/assets/image (5).png')
    }
  ]);

  const RenderProductItem = ({ item }: { item: productProps }) => ( // Receive the 'item' object
    <TouchableOpacity onPress={() => {}}>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
      <Image source={item.image} /> {/* Use item.image as the source */}
    </TouchableOpacity>
  );

  return (
    <View style={{ width: '30%' }}>
      <View style={{ display: 'contents'}}>
        <View style={{display:'flex',flexDirection:'row',gap:5 }}>
          <Image source={location} />
          <Text>Location</Text>
        </View>
        <View style={{display:"flex",flexDirection:'row'}} >
          <Text>California,USA</Text>
          <span> <Image source={drop} /></span>
          <Image source={profile} style={{borderRadius:50,marginLeft:350}} />
        
        </View>
        
      </View>
      <View style={{ display: 'flex', flexDirection: 'row',borderWidth:0.5,borderColor:'gray',borderRadius:50 }}>
        <Image source={search} />
        <TextInput placeholder="Search" style={{ flex: 1 }} /> {/* Added flex to TextInput */}
        <Image source={filre} style={{height:40,borderRadius:90}} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Image source={music} />
        <Image source={sports} />
        <Image source={food} />
        <Image source={art} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Explore</Text>
        <Text>See all </Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RenderProductItem item={item} />}
        style={{display:'flex',flexDirection:'row'}} // Correctly pass the item
      />
    </View>
  );
};

export default Splash;