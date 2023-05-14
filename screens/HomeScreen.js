import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { AsyncStorage } from 'react-native';
import { Home1 } from "../assets/index";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLetGo = async () => {
    try {
      await AsyncStorage.setItem('visitedHome', 'true');
      navigation.navigate("Discover");
    } catch (error) {
      console.log(error);
    }
  };

  const checkVisitedHome = async () => {
    try {
      const visited = await AsyncStorage.getItem('visitedHome');
      if (visited) {
        navigation.navigate("Discover");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    checkVisitedHome();
  }, []);

  return (
    <TailwindProvider>
      <SafeAreaView>
        <View className="flex-1">
          <View className="flex-1">
            <StatusBar translucent backgroundColor={"rgba(0,0,0,0)"} />
            <ImageBackground source={Home1} className="flex-1">
              <Text className="m-20 text-white text-7xl text-center">
                Wander
              </Text>
              <Text className="text-white text-5xl mt-48 left-2">
                Discover World
              </Text>
              <Text className="text-white text-5xl left-3">with us</Text>

              <Text className="text-white left-3 mt-13 text-3xl">
                Take a journey into yourself, spread your wings of freedom...
                wander often, wonder always
              </Text>
              <TouchableOpacity onPress={handleLetGo}>
                <View className="bg-teal-700 mt-8 h-16 w-28 rounded-tl-lg rounded-br-lg left-4">
                  <Text className="text-white mt-4 text-center text-4xl">
                    Let's Go
                  </Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default HomeScreen;
