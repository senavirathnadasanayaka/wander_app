import { Text, View, ImageBackground } from "react-native";
import React from 'react';
import { Travel1 } from "../../assets";

const Sigiriya = () => {
  return (
    <ImageBackground source={Travel1} className="flex-1">
      <View>
        <Text>
          Sigiriya is an ancient stone fort located in the central Matale
          district of Sri Lanka. It is a popular tourist destination due to its
          unique rock fort and beautiful views from the top. Built by King
          Kasyapa in the 5th century AD, the fort has served as a palace and a
          fort. It is considered one of the best-preserved ancient sites in Asia
          and was named a World Heritage Site by UNESCO in 1982. The place is
          famous for its beautiful murals depicting the images of the palace and
          for its advanced hydraulics system. It was used to store water. The
          fort is located in the middle of the forest and is surrounded by
          beautiful gardens and waterways
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Sigiriya;
