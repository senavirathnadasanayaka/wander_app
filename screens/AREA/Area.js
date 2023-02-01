import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";


const Area = () => {
  const navigation = useNavigation();

   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);

  return (
    <TailwindProvider>
      <View className="bg-black flex-1">
        <View className="mt-9">
          <Text className="text-3xl text-white">Find any areas</Text>
        </View>
        <ScrollView>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Adams")}>
                <View className="bg-lime-400 mt-4 ">
                  <Text className="text-2xl text-white mt-11 ">Adams Peak</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Benthota")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">Bentota Beach</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Hortan")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-1">
                  Horton Plains National Park
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sigiriya")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">Sigiriya</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Nuwara")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">
                  World's End Nuwara Eliya
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Yala")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">
                  Yala National Park
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Galle")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">
                  Galle Face Green
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sinharaja")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">
                  Sinharaja Forest Reserve
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Temple")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-1">
                  The Temple of the Sacred Tooth Relic
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Pinnawala")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-1">
                  Pinnewala Elephant Orphanage
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Town")}>
              <View className="bg-lime-400 mt-4">
                <Text className="text-2xl text-white mt-11">
                  Old Town of Galle port{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TailwindProvider>
  );
};

export default Area;

