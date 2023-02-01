import {
  View,Image,Text,ImageBackground,ScrollView,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { createElement, useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import * as Animatable from "react-native-animatable";
import { Shoes ,Wander } from "../assets/index";



const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      <View className="flex-1 bg-black">
        <View>
          <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
            source={Wander}
            className="w-full h-4/6 rounded-xl flex-1"
          />
          <View>
            {/* <Text className="text-3xl text-lime-500 mt-3 mx-7">Wander</Text> */}
            <Text className="text-white mt-5 ">
              Take a journey in to your self..... spread your wings of
              freedom.....wander often,wonder always
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <View className="flex-row  rounded-l-full  rounded-r-full border-l-8 border-b-2 border-t-2 border-r-8 border-lime-400 mt-8 bg-amber-600">
              <Image source={Shoes} className=" left-8 w-24 h-24" />
              <Text className="text-2xl mt-6 left-8 text-white">Let's go</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default HomeScreen;
