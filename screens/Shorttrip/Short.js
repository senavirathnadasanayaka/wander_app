import {  Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const Short = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); 

  return (
    <View>
      <Text>Short</Text>
    </View>
  );
};

export default Short;

