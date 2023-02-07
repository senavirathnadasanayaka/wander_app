import {
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { createElement, useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import * as Animatable from "react-native-animatable";
import { Shoes, Wander, Home1 } from "../assets/index";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      <View className="flex-1 ">
        <View className="flex-1 ">
          <StatusBar translucent backgroundColor={"rgba(0,0,0,0)"} />
          <ImageBackground source={Home1} className="flex-1">
            <Text className="m-20 text-white text-4xl left-11">Wander</Text>
            <Text className=" text-white text-2xl mt-48 left-2">
              Discover World
            </Text>
            <Text className=" text-white text-2xl left-2">with us</Text>

            <Text className="text-white left-3 mt-13">
              Take a journey in to your self..... spread your wings of
              freedom.....wander often,wonder always
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
              <View>
                <View className=" bg-teal-700 mt-8 h-20 w-28 rounded-lg left-4 ">
                  <View>
                    <Text className=" text-white border-spacing-7-white left-2 mt-5 text-base">
                      Let's Go
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default HomeScreen;
