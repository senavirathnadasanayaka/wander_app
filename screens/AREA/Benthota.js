import { Text, View, ImageBackground } from "react-native";
import React from 'react';
import { Sea1 } from '../../assets';

const Benthota = () => {
  return (
    <ImageBackground source={Sea1} className="flex-1 ">
      <View>
        <Text className="flex-1 text-3xl">
          Bentota is a coastal town located in the Galle District of the
          Southern Province of Sri Lanka. It is known for its beautiful beaches
          and is a popular tourist destination. Bentota Beach is a long, sandy
          beach that stretches for several kilometers along the coast. The beach
          is surrounded by coconut groves and palm trees, and is a great place
          for swimming, sunbathing, and water sports. The water is clear and
          calm, making it a safe place for activities such as snorkeling and
          kayaking. There are also several hotels, resorts, and guest houses
          located along the beach, providing a range of accommodation options
          for visitors. In addition to the beach, Bentota is also home to the
          Bentota River, which is a popular spot for boat rides and other
          water-based activities.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Benthota;

