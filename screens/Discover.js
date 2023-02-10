import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import React, {useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import LogScreen from './Log/LogScreen'

const Discover = () => {
  const navigation = useNavigation();
  const Tab = createMaterialBottomTabNavigator();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])


    return (
      <TailwindProvider>
        <SafeAreaView className="flex-1 bg-black">
        
          <View className="flex-row">
            <Text className="mt-9 text-4 text-3xl text-white">Discover</Text>
            <View className=" mt-12 left-44">
              <TouchableOpacity onPress={() => navigation.navigate("LogScreen")}>
                <Icon name="user" size={30} color="#14532d" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-center rounded-xl py-1 px-3 shadow-xl">
            <GooglePlacesAutocomplete
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: "AIzaSyCMtICSGaFrzOwXVFa8Tgp_Drsgut0Zmec",
                language: "en",
              }}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
            <View className="shadow-md bg-teal-700 h-32 mt-4  rounded-xl ">
              <Text className="mt-10 text-2xl left-4 text-white">Maps</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Hotel")}>
            <View className="shadow-md bg-teal-700 h-32 mt-4 rounded-xl">
              <Text className="mt-10 text-2xl left-4 text-white">Hotel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Area")}>
            <View className="shadow-md bg-teal-700 h-32 mt-4 rounded-xl">
              <Text className="mt-10 text-2xl left-4 text-white">Area</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Short")}>
            <View className="shadow-md bg-teal-700 h-32 mt-4 rounded-xl">
              <Text className="mt-10 text-2xl left-4 text-white">
                Short Trip
              </Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </TailwindProvider>
    );
  };


export default Discover;
