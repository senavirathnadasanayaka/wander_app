import React from "react";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import { createElement, useLayoutEffect } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from "react-native-vector-icons/FontAwesome";



export default function App() {
  let myMap;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const INITIAL_MARKER = [
    {
      id: 1,
      region: { latitude: 7.957, longitude: 80.7603 },
      title: "Sigiriya",
      desc: "dsfdgh",
    },
    {
      id: 2,
      region: { latitude: 6.8096, longitude: 80.4994 },
      title: "Adam's Peak",
      desc: "dsfdgh",
    },
    {
      id: 3,
      region: { latitude: 6.8028, longitude: 80.8091 },
      title: "Horton Plains National Park",
      desc: "dsfdgh",
    },
    {
      id: 4,
      region: { latitude: 6.42162, longitude: 79.996032 },
      title: "Bentota Beach",
      desc: "dsfdgh",
    },
    {
      id: 5,
      region: { latitude: 6.7803, longitude: 80.7945 },
      title: "World's End ",
      desc: "dsfdgh",
    },
    {
      id: 6,
      region: { latitude: 6.3221, longitude: 81.3866 },
      title: "Yala National Park",
      desc: "dsfdgh",
    },
    {
      id: 7,
      region: { latitude: 6.9238, longitude: 79.8449 },
      title: "Galle Face Green",
      desc: "dsfdgh",
    },
    {
      id: 8,
      region: { latitude: 6.3829, longitude: 80.602 },
      title: "Sinharaja Forest",
      desc: "dsfdgh",
    },
    {
      id: 9,
      region: { latitude: 7.2936, longitude: 80.6413 },
      title: "The temple of the sacred tooth relic ",
      desc: "dsfdgh",
    },
    {
      id: 10,
      region: { latitude: 7.301, longitude: 80.3872 },
      title: "Pinnawala Elephant Orphanage",
      desc: "dsfdgh",
    },
    {
      id: 11,
      region: { latitude: 6.028624, longitude: 80.216797 },
      title: "old town of galle port ",
      desc: "dsfdgh",
    },
  ]
const renderMarker = () => {
  return INITIAL_MARKER.map((_marker) => (
    <MapMarker
      key={_marker["id"]}
      coordinate = {_marker["region"]}
      title={_marker.title}
      description={_marker["desc"]}
      onPress={() => {
         myMap.fitToCoordinates([_marker["region"]], {
          edgePadding:{top: 10, bottom:10, left:10, right:10},
          animated: true
         });
      }}
    />
  ));
}
return (
  <TailwindProvider>
    <View className=" bg-black">
      <View className="mt-12 flex-row">
        <View className="mt-2 left-2 ">
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Icon name="arrow-left" size={30} color="#14532d" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-4xl text-white left-5 mt-3">Wander Maps</Text>
        </View>
        <View className="mt-9 right-48">
          <Text className="text-3xl text-white  mt-5 ">Watch best location and select your Trip  </Text>
        </View>
      </View>

      <View className="flex-1">
        <MapView
          ref={(ref) => (myMap = ref)}
          className="w-98 h-5/6 mt-14 "
          provider={PROVIDER_GOOGLE}
          // region={{
          //   latitude: 7.957,
          //   longitude: 80.7603,
          //   latitudeDelta: 0.015,
          //   longitudeDelta: 0.0121,
          // }}
        >
          {renderMarker()}
        </MapView>
      </View>
    </View>
  </TailwindProvider>
)}
