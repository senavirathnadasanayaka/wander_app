import { useState } from "react";
import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <View className=" bg-black flex-1">
        <Text className="text-white mt-9 text-4xl left-2">Search Areas</Text>
          <View className="flex-1 mt-2">
            <TextInput
              placeholder="Search Areas"
              value={searchQuery}
              onChangeText={(query) => setSearchQuery(query)}
              placeholderTextColor="#A1A1AA"
              className="flex-1 bg-slate-200 py-2.5 rounded-xl"
            />
          </View>
          <ScrollView>
            {filteredAreas.map((area) => (
              <TouchableOpacity
                key={area.route}
                onPress={() => navigation.navigate(area.route)}
              >
                <View className="mt-2 h-24 bg-emerald-600">
                  <Text className="text-3xl text-white mt-9 text-center">
                    {area.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      
    </TailwindProvider>
  );
};




export default Area;
