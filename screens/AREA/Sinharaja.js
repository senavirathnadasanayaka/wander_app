import { Text, View, ImageBackground } from "react-native";
import React from 'react';
import { Sin } from '../../assets';

const Sinharaja = () => {
  return (
    <ImageBackground source={Sin} className="flex-1 ">
      <View>
        <Text>
          Sinharaja Forest Reserve is a protected tropical rainforest in Sri
          Lanka. It is a World Heritage Site and a biodiversity hotspot, with a
          high level of endemism (meaning that many of the species found there
          are not found anywhere else in the world). The reserve is home to a
          wide variety of plant and animal species, including rare and
          endangered species such as the Sri Lankan leopard, Sri Lankan
          elephant, and the purple-faced langur. It is also an important source
          of timber and non-timber forest products for the local community. The
          forest is located in the southwest of the country and covers an area
          of approximately 11,187 hectares. It is managed by the Department of
          Forest Conservation and the Wildlife Department of the Government of
          Sri Lanka.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Sinharaja;

