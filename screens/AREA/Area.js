import { useState } from "react";
import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Shoes, Wander, Map1,Tiger, Db,Travel2, Area1} from "../../assets/index";

const Area = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
 
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const areas = [
    { name: "Adams Peak", route: "Adams" },
    { name: "Bentota Beach", route: "Benthota" },
    { name: "Horton Plains National Park", route: "Hortan" },
    { name: "Sigiriya", route: "Sigiriya" },
    { name: "World's End Nuwara Eliya", route: "Nuwara" },
    { name: "Yala National Park", route: "Yala" },
    { name: "Galle Face Green", route: "Galle" },
    { name: "Sinharaja Forest Reserve", route: "Sinharaja" },
    { name: "The Temple of the Sacred Tooth Relic", route: "Temple" },
    { name: "Pinnewala Elephant Orphanage", route: "Pinnawala" },
    { name: "Old Town of Galle port", route: "Town" },
  ];

  const filteredAreas = areas.filter((area) =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TailwindProvider>
      <View style={{ backgroundColor: "#1A202C", flex: 1 }}>
      <Text style={{ color: "#F7FAFC", marginTop: 36, fontSize: 40, marginLeft: 10, fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 2 }}>Search Areas</Text>
        <View style={{ marginTop: 20, padding: 10, backgroundColor: "#4A5568", borderRadius: 20 }}>
        <TextInput
  placeholder="Search Areas"
  value={searchQuery}
  onChangeText={(query) => setSearchQuery(query)}
  placeholderTextColor="#A1A1AA"
  style={{
    backgroundColor: "#2D3748",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    color: "#F7FAFC",
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#CBD5E0",
  }}
/>

        </View>
        <ScrollView style={{ marginTop: 20 }}>
          {filteredAreas.map((area) => (
            
<TouchableOpacity
  key={area.route}
  onPress={() => navigation.navigate(area.route)}
  style={{ marginTop: 3, backgroundColor: "#CBD5E0", borderRadius: 9, flexDirection: 'row', alignItems: 'center' }}
>
  <View style={{ height: 100, alignItems: "flex-start", justifyContent: "center", flex: 1 }}>
    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1A202C" }}>
      {area.name}
    </Text>
  </View>
  <View style={{ padding: 10 }}>
    <Icon name="map-marker" size={24} color="#1A202C" />
  </View>
  <Image
    source={Shoes}
    style={{ width: 100, height: 100 }}
  />
</TouchableOpacity>

          ))}
        </ScrollView>
      </View>
    </TailwindProvider>
  );
};

export default Area;