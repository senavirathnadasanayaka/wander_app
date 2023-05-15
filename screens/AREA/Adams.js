import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Phone1, Travel1 } from "../../assets";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';

const Adams = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'beautiful-font': require('../../assets/Font/face.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      <ImageBackground source={Phone1} style={{ flex: 1 }}>
        <View>
          <Text style={fontLoaded ? styles.title : null}>Adams peak</Text>
          <Icon name="map-marker" size={24} color="#fff" style={{ marginRight: 8 }} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
          <Text style={fontLoaded ? styles.text : null}>
            Adams Peak, also known as Sri Pada, is a mountain located in central Sri Lanka. It is a popular destination for both local and foreign tourists, and is considered a sacred site by Buddhists, Hindus, and Muslims. The mountain is famous for its "sacred footprint," a 1.8-meter rock formation at the top that is believed to be the footprint of the Buddha, the Hindu god Shiva, or the Muslim prophet Adam, depending on one's belief system. The mountain can be climbed by following a 5,200-step pathway that begins at the base and winds its way to the top. The journey to the top is considered a pilgrimage by many, and it is common for people to make the trek during the full moon in the months of December, January, and April.
          </Text>
        </View>
      </ImageBackground>
    </TailwindProvider>
  );
};

const styles = {
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'beautiful-font',
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'beautiful-font',
  },
};

export default Adams;
