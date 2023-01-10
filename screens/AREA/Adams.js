import { Text, View,ImageBackground,Image } from "react-native";
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { Phone1, Travel1 } from "../../assets";
const Adams = () => {
  return (
    <TailwindProvider>
      <ImageBackground source={Phone1} className="flex-1">
        <View>
          <View>
            <Text className="left-3 text-white ">
              Adams Peak, also known as Sri Pada, is a mountain located in
              central Sri Lanka. It is a popular destination for both local and
              foreign tourists, and is considered a sacred site by Buddhists,
              Hindus, and Muslims. The mountain is famous for its "sacred
              footprint, " a 1.8 meter rock formation at the top that is
              believed to be the footprint of the Buddha, the Hindu god Shiva,
              or the Muslim prophet Adam, depending on one's belief system. The
              mountain can be climbed by following a 5,200 step pathway that
              begins at the base and winds its way to the top. The journey to
              the top is considered a pilgrimage by many, and it is common for
              people to make the trek during the full moon in the months of
              December, January, and April.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TailwindProvider>
  );
};

export default Adams;
