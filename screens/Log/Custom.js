import { View, Text, TextInput,Image } from "react-native";
import React from "react";
import { User } from "../../assets";

const Custom = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View>
      
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        className="border-x border-y border-t border-white w-80 h-16 bg-white"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Custom;
