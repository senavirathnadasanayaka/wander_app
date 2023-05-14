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
import { BlurView } from "@react-native-community/blur"; // Import BlurView

const Area = () => {
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      <View style={{ flex: 1 }}>
        <BlurView
          style={{ flex: 1 }}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="#1A202C"
        >
          <View style={{ marginTop: 36, padding: 10 }}>
            <Text style={{ color: "#F7FAFC", fontSize: 40, marginLeft: 10 }}>
              Search Areas
            </Text>
            <View
              style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: "#4A5568",
                borderRadius: 20,
              }}
            >
              <TextInput
                placeholder="Search Areas"
                value={searchQuery}
                onChangeText={(query) => setSearchQuery(query)}
                placeholderTextColor="#A1A1AA"
                style={{
                  backgroundColor: "#2D3748",
                  padding: 10,
                  borderRadius: 20,
                  color: "#F7FAFC",
                }}
              />
            </View>
            <ScrollView style={{ marginTop: 20 }}>
              {filteredAreas.map((area) => (
                <TouchableOpacity
                  key={area.route}
                  onPress={() => navigation.navigate(area.route)}
                  style={{
                    marginTop: 3,
                    backgroundColor: "#CBD5E0",
                    borderRadius: 9,
                    flexDirection: "row",
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <View
                    style={{
                      height: 100,
                      alignItems: "flex-start",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{ fontSize: 24, fontWeight: "bold", color: "#1A202C" }}
                    >
                      {area.name}
                    </Text>
                  </View>
                  <View style={{ padding: 10 }}>
                    <Icon name="map-marker" size={24} color="#1A202C" />
                  </View>
                  <Image source={Shoes} style={{ width: 100, height: 100 }} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </BlurView>
      </View>
    </TailwindProvider>
  );
};

export default Area;

