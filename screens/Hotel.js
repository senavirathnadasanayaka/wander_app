import { Text, View } from 'react-native';
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { createElement, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Hotel = () => {
    const navigation = useNavigation();
       useLayoutEffect(() => {
         navigation.setOptions({
           headerShown: false,
         });
       }, []);


  return (
    <TailwindProvider>
      <View className="mt-11">
        <Text className="text-2xl">Book Hotels</Text>
      </View>
    </TailwindProvider>
  );
};

export default Hotel;

