import { Text, View, TouchableOpacity } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const Short = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); 

  return (
    <TailwindProvider>
      <View className=" bg-black flex-1">
        <View className="mt-9 flex-row">
          <View className="mt-2 left-2">
            <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
              <Icon name="arrow-left" size={30} color="#14532d" />
            </TouchableOpacity>
          </View>
          <Text className="text-2xl text-white left-4">Short Trip</Text>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default Short;

