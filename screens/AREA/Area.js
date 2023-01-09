import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import React from 'react';


const Area = () => {
  const navigation = useNavigation();
  return (
    <TailwindProvider>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Adams")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Adams Peak</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Benthota")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Bentota Beach</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Hortan")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Horton Plains National Park</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Sigiriya")}>
            <View className="mt-2 shadow-2xl">
              <Text className="text-2xl">Sigiriya</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Nuwara")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">World's End Nuwara Eliya</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Yala")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Yala National Park</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Galle")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Galle Face Green</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Sinharaja")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Sinharaja Forest Reserve</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Temple")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">
                The Temple of the Sacred Tooth Relic
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pinnawala")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Pinnewala Elephant Orphanage</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Town")}>
            <View className="border-cyan-500 border-4 mt-2">
              <Text className="text-2xl">Old Town of Galle port </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TailwindProvider>
  );
};

export default Area;

