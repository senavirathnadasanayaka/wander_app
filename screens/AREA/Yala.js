import { Text, View, ImageBackground } from "react-native";
import React from 'react';
import { Tiger } from '../../assets';

const Yala = () => {
  return (
    <ImageBackground source={Tiger} className="flex-1 ">
      <View>
        <Text>
          Yala National Park is a protected area located in the southeast region
          of Sri Lanka. It is the second-largest national park in the country
          and is home to a diverse array of wildlife, including elephants,
          leopards, bears, deer, and a wide variety of bird species. The park is
          known for its beautiful beaches, which are home to a variety of marine
          life, and for its stunning landscape, which consists of forests,
          grasslands, and lagoons. Yala National Park is a popular tourist
          destination for those interested in wildlife and nature. Visitors can
          go on safari tours to see the animals in their natural habitat, go
          birdwatching, or relax on the beach.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Yala;

