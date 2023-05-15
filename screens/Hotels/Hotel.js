import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList,Image} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Hotels/COLORS';

const hotels = [
  {
    name: "Palmyra Nature Resort Sigiriya",
    Review:"163",
    category: 'luxury',
    location: "No 207/A,Bandaranayaka Rd,Sigiriya",
    price: 120,
    image: require("../../assets/hotel1.jpg"),
    details: `2.5 km from Sigiriya Rock, Palmyra Nature Resort Sigiriya offers accommodation with an outdoor swimming pool, free private parking, a garden and a shared lounge. `,
  },
  {
   
    name: "Adams Peak Inn",
    Review:"200",
    location: "Del House, 22070 Adams Peak, Sri Lanka ",
    category: 'popular',
    price: 70,
    image: require("../../assets/adam.jpg"),
    details: `Situated in Adams Peak, 600 m from Adam's Peak, Adams Peak Inn features accommodation with a shared lounge, free private parking, a restaurant and a bar`,
  },
  {
    name: 'Budget Hotel',
    Review:"300",
    category: 'all',
    rating: 3.5,
    reviews: 200,
  },
  {
    name: "Jetwing Yala",
    Review:"600",
    location: "Kirinda,Yala",
    category: 'top-rated',
    price: 90,
    image: require("../../assets/hotel3.jpg"),
    details: `Spread across 38 acres of land, Jetwing Yala features an outdoor pool, a business centre and luxurious rooms located on the borders of Yala National Park.`,
  },
  {
    name: "Atha Resort",
    Review:"400",
    location: " 290/A , Airforce Road, Kibissa , Dambulla,Sigiriya ",
    category: 'luxury',
    price: 100,
    image: require("../../assets/atha.jpg"),
    details: `Set 5.3 km from Sigiriya Rock, Atha Resort offers 5-star accommodation in Sigiriya and features a garden`,
  },

];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const renderHotelItem = ({ item }) => (
    <TailwindProvider>
    <TouchableOpacity style={{ marginBottom: 20 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{item.name}</Text>
    <Image style={{height: 180,width: '100%',borderTopRightRadius: 10,borderTopLeftRadius: 10,resizeMode: 'cover',}} source={item.image} />
    <View className="flex-row left-56 -mt-7">
    <Icon name="star" size={25} color={COLORS.orange} />
    <Text style={{ fontSize: 15, color: COLORS.white }}>{item.Review}</Text>
    </View>
      <Text className="text-2xl">price: {item.price}</Text>
      <Text>Details: {item. details}</Text>
      <Text style={{ color: COLORS.grey, fontSize: 12 }}>location: {item.location}</Text>

      
    </TouchableOpacity>
    </TailwindProvider>
  );

  return (
    
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => setSelectedCategory('all')}>
          <Text style={{ color: selectedCategory === 'all' ? 'red' : 'black',fontSize: 20}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('luxury')}>
          <Text style={{ color: selectedCategory === 'luxury' ? 'red' : 'black' ,fontSize: 20}}>Luxury</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('popular')}>
          <Text style={{ color: selectedCategory === 'popular' ? 'red' : 'black' ,fontSize: 20}}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('top-rated')}>
          <Text style={{ color: selectedCategory === 'top-rated' ? 'red' : 'black' ,fontSize: 20}}>Top Rated</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={hotels.filter((hotel) => selectedCategory === 'all' || hotel.category === selectedCategory)}
        renderItem={renderHotelItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default App;