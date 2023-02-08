import { Text, View, ImageBackground,TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import { log } from "../assets";


const LogScreen = () => {

  const navigation = useNavigation();

   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);
  

  return (
    <TailwindProvider>
      <View className="flex-1 mt-72 left-10 ">
        <TextInput
          placeholder="placeholder"
          className="border-x border-y border-t border-white w-80 h-12 bg-white"
        />
        <TextInput
          placeholder="placeholder"
          className="border-x border-y border-t border-white w-80 h-12 bg-white mt-6"
        />
      </View>
    </TailwindProvider>
  );
};

export default LogScreen;
