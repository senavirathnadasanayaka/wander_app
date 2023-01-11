import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { createElement, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";


const Hotel = () => {
    const navigation = useNavigation();
       useLayoutEffect(() => {
         navigation.setOptions({
           headerShown: false,
         });
       }, []);

  const [selected, setSelected] = React.useState("");
  
  const data = [
    { key: "1", value: "Central", disabled: true },
    { key: "2", value: "Eastern" },
    { key: "3", value: "North Central" },
    { key: "4", value: " Northern", disabled: true },
    { key: "5", value: "North Western" },
    { key: "6", value: "Sabaragamuwa" },
    { key: "7", value: "Southern" },
    { key: "8", value: "Uva" },
    { key: "9", value: "Western" },
  ];
       
  return (
    <TailwindProvider>
      <View className="mt-11">
        <Text className="text-2xl">Book Hotels</Text>
      </View>
      <View className="mt-11">
        
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
        
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Central")}>
          <View className="mt-11">
            <Text> Central</Text>
          </View>
        </TouchableOpacity>
        <View className="mt-11">
          <Text> Eastern</Text>
        </View>
        <View className="mt-11">
          <Text>North Central</Text>
        </View>
        <View className="mt-11">
          <Text> Northern</Text>
        </View>
        <View className="mt-11">
          <Text> North Western</Text>
        </View>
        <View className="mt-11">
          <Text> Sabaragamuwa</Text>
        </View>
        <View className="mt-11">
          <Text> Southern</Text>
        </View>
        <View className="mt-11">
          <Text> Uva</Text>
        </View>
        <View className="mt-11">
          <Text> Western</Text>
        </View>
      </ScrollView>
    </TailwindProvider>
  );
};

export default Hotel;

