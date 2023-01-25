import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { createElement, useLayoutEffect } from "react";
import { View, Text, Dimensions ,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Maker1 } from "../assets/index";


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
          <MapView
            className="w-98 h-5/6 mt-20 "
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          <Marker>
            cordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            <Image source={Maker1}/>
          </Marker>
    
          </MapView>
        </View>
      </View>
    </TailwindProvider>
  );
}




