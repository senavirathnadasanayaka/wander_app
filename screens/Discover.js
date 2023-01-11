import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import React, {useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])


    return (
      <TailwindProvider>
        <SafeAreaView>
          <View>
            <Text className="mt-10 text-4 text-3xl">Discover</Text>
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
            <View>
              <Text className="mt-10 text-2xl left-4">Maps</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Hotel")}>
            <View>
              <Text className="mt-10 text-2xl left-4">Hotel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Area")}>
            <View>
              <Text className="mt-10 text-2xl left-4">Area</Text>
            </View>
          </TouchableOpacity>
         
          
        </SafeAreaView>
      </TailwindProvider>
    );
  };


export default Discover;
