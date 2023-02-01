import {  Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const Short = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); 

  return (
    <TailwindProvider>
      <View className="flex-1">
        <Text className="mx-9 mt-9">Short Trip</Text>
      </View>
    </TailwindProvider>
  );
};

export default Short;

