import {Text, View,ScrollView } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import React from 'react';






const Area = () => {
  return (
    <TailwindProvider>
      
      <ScrollView>
        <View>
          <View className="mt-2 shadow-2xl">
            <Text className="text-2xl">Sigiriya</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">World's End Nuwara Eliya</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Yala National Park</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Galle Face Green</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Sinharaja Forest Reserve</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">
              The Temple of the Sacred Tooth Relic
            </Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Bentota Beach</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Pinnewala Elephant Orphanage</Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Old Town of Galle port </Text>
          </View>
          <View className="border-cyan-500 border-4 mt-2">
            <Text className="text-2xl">Horton Plains National Park</Text>
          </View>
        </View>
      </ScrollView>
    </TailwindProvider>
  );
};

export default Area;

