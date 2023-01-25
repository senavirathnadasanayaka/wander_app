import {
  View,SafeAreaView,Image,Text,ImageBackground,ScrollView,TouchableOpacity} from "react-native";
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
      <View>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={Wander}
          className="w-full h-4/6 rounded-xl flex-1"
        />
        <View>
          <Text className="text-3xl text-cyan-600">Wander</Text>
          <Text>
            Take a journey in to your self..... spread your wings of
            freedom.....wander often,wonder always
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <View className="flex-row  rounded-l-full  rounded-r-full border-l-8 border-b-2 border-t-2 border-r-8 border-lime-400 mt-8">
            <Image source={Shoes} className=" left-8 w-24 h-24" />
            <Text className="text-2xl mt-6 left-8">Let's go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};

export default HomeScreen;
