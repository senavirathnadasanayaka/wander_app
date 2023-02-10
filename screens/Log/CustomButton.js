import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <Pressable onPress={onPress}>
      <View className="mt-1 bg-blue-600 h-14 w-80 right-10 rounded-md">
        <Text className="text-white text-center mt-4">
          {text}
         
        </Text>
      </View>
    </Pressable>
  );
}

export default CustomButton