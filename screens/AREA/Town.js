import { Text, View, ImageBackground } from "react-native";
import React from 'react'
import { Gall2 } from '../../assets';

const Town = () => {
  return (
    <ImageBackground source={Gall2} className="flex-1 ">
      <View>
        <Text>
          The Old Town of Galle is a historic area located within the city of
          Galle, on the southern coast of Sri Lanka. It is home to the Galle
          Fort, a fortification built by the Dutch in the 17th century. The Old
          Town is a well-preserved example of Dutch colonial architecture, with
          streets lined with historic buildings, churches, and houses. The Old
          Town is a UNESCO World Heritage Site and is considered one of the
          best-preserved Dutch fortifications in Asia. It is also a popular
          tourist destination, with its charming streets, cultural attractions,
          and beautiful beaches. The Old Town is located within the Galle
          District and is approximately 120 kilometers south of Colombo. It is a
          major port on the island and was an important trading center in the
          past.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Town
