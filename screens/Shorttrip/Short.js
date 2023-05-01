

import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Short= () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // handle sign in logic here
  };

  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-black">
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Icon name="arrow-left" size={30} color="#14532d" />
        </TouchableOpacity>
        <Text className="text-4xl text-white mt-5">Sign In</Text>
        <View className="mt-10">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#C4C4C4"
            style={{
              backgroundColor: '#3B3B3B',
              width: 300,
              height: 50,
              borderRadius: 10,
              paddingLeft: 20,
              fontSize: 20,
              color: '#FFFFFF',
              marginBottom: 20,
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#C4C4C4"
            style={{
              backgroundColor: '#3B3B3B',
              width: 300,
              height: 50,
              borderRadius: 10,
              paddingLeft: 20,
              fontSize: 20,
              color: '#FFFFFF',
              marginBottom: 20,
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#14532d',
              width: 300,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={handleSignIn}
          >
            <Text className="text-xl text-white">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text className="text-lg text-white">
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default Short;

