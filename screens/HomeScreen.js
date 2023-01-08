import {
  View,
  SafeAreaView,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { createElement, useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import * as Animatable from "react-native-animatable";
import { Avatar, Para, Shoes } from "../assets/index";



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
          source={Avatar}
          className="w-full h-4/6 rounded-xl"
        />
        <View>
          <Text className="text-3xl text-cyan-600">Wander</Text>
          <Text>
            Take a journey in to your self..... spread your wings of
            freedom.....wander often,wonder always
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="flex-row left-12 rounded-l-full border-l-8 border-b-2 border-t-2 border-lime-400 mt-8"
        >
          <Image source={Shoes} className="w-24 h-24" />
          <Text className="text-2xl mt-6">Let's go</Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};

export default HomeScreen;
