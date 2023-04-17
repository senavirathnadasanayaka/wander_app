import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import React, {useLayoutEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import { Shoes, Wander, Tiger, Db } from "../assets/index";




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
          <ImageBackground source={Db}>
            <View className="flex-row">
              <Text className="mt-9 text-4 text-4xl text-white">Discover</Text>
              <View className=" mt-9 left-64">
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Icon name="user" size={30} color="#14532d" />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <ScrollView>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
                    <View>
                      <ImageBackground
                        source={Tiger}
                        style={{ height: 150, marginVertical: 10 }}
                        imageStyle={{ borderRadius: 10 }}
                      >
                        <Text className="mt-14 px-4 text-white text-5xl">
                          Maps
                        </Text>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Hotel")}
                  >
                    <View>
                      <ImageBackground
                        source={Tiger}
                        style={{ height: 150, marginVertical: 10 }}
                        imageStyle={{ borderRadius: 10 }}
                      >
                        <Text className="mt-14 px-4 text-white text-5xl">
                          Hotels
                        </Text>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Area")}>
                    <View>
                      <ImageBackground
                        source={Tiger}
                        style={{ height: 150, marginVertical: 10 }}
                        imageStyle={{ borderRadius: 10 }}
                      >
                        <Text className="mt-14 px-4 text-white text-5xl">
                          Areas
                        </Text>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Short")}
                  >
                    <View>
                      <ImageBackground
                        source={Tiger}
                        style={{ height: 150, marginVertical: 10 }}
                        imageStyle={{ borderRadius: 10 }}
                      >
                        <Text className="mt-14 px-4 text-white text-5xl">
                          Short Trip
                        </Text>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </TailwindProvider>
    );
  };


export default Discover;
