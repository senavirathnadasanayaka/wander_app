import { Text, View, ImageBackground } from "react-native";
import React from 'react';
import { Bake } from "../../assets";

const Hortan = () => {
  return (
    <ImageBackground source={Bake} className="flex-1 ">
      <View>
        <Text>
          The Horton Plains National Park is a protected area in the central
          highlands of Sri Lanka. It is located in the Nuwara Eliya District of
          the Central Province and covers an area of about 3,160 hectares. The
          park is home to a variety of flora and fauna, including many endemic
          species. It is known for its scenic beauty, with rolling grasslands,
          forests, streams, and waterfalls. The park is home to several
          important ecological zones, including montane grassland, cloud forest,
          and high-elevation forest. It is an important habitat for many
          threatened and endangered species, including the Horton Plains slender
          loris, the Sri Lankan leopard, and the Sri Lankan elephant. The park
          is a popular destination for hikers and nature enthusiasts.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Hortan;
