import { Text, View, ImageBackground } from "react-native";
import React from 'react';
import { Gall1, Gall2 } from "../../assets";

const Galle = () => {
  return (
    <ImageBackground source={Gall1} className="flex-1 ">
      <View>
        <Text>
          Galle Face Green is a popular urban park located in Colombo, Sri
          Lanka. It is a large open space that stretches along the coast, facing
          the Galle Face Hotel. The park is a popular spot for locals and
          tourists alike and is a great place to relax and enjoy the fresh sea
          air. It is a popular spot for picnics, kite flying, and evening walks.
          The park is also home to a number of food stalls and vendors selling
          snacks, drinks, and souvenirs. Galle Face Green is a popular spot for
          sunset watching, and the views of the sunset over the Indian Ocean are
          breathtaking.{" "}
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Galle;

