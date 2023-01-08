import React from 'react';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { createElement, useLayoutEffect } from "react";
import { StyleSheet, View,Text, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";








export default function App() {
  const navigation = useNavigation();
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     }); 
   }, []);

  return (
    <TailwindProvider>
      <View className="bg-blue-800">
        <View className="mt-12">
          <Text className="text-3xl text-white">Wonder Maps</Text>
        </View>
        <View className="flex-1">
          <MapView className="w-98 h-5/6 mt-20 " provider={PROVIDER_GOOGLE} />
        </View>
      </View>
    </TailwindProvider>
  );
}




