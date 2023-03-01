import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { createElement, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/FontAwesome";

const Hotel = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const [search, setSearch] = React.useState("");

  const data = [
    { key: "1", value: "Central",  },
    { key: "2", value: "Eastern" },
    { key: "3", value: "North Central" },
    { key: "4", value: " Northern", },
    { key: "5", value: "North Western" },
    { key: "6", value: "Sabaragamuwa" },
    { key: "7", value: "Southern" },
    { key: "8", value: "Uva" },
    { key: "9", value: "Western" },
  ];

  const filteredData = data.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TailwindProvider>
      <View className="mt-11 flex-row left-2">
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <View className="mt-2">
            <Icon name="arrow-left" size={30} color="#14532d" />
          </View>
        </TouchableOpacity>
        <Text className="text-2xl left-2">Book Hotels</Text>
      </View>

      <View className="mt-11">
        <TextInput
          placeholder="Search"
          className="flex-row items-center rounded-xl py-2 px-4 shadow-black bg-slate-200"
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <View className="flex-1 left-4">
        {filteredData.map((item) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate("Central", { item })}
          >
            <View className="mt-11">
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </TailwindProvider>
  );
};

export default Hotel;
