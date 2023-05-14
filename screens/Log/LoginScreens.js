import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Zocial";
import { AsyncStorage } from 'react-native';
import { auth } from "../../firebase";

const LoginScreens = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        AsyncStorage.setItem('userEmail', user.email); // Store user email in AsyncStorage
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        AsyncStorage.setItem('userEmail', user.email); // Store user email in AsyncStorage
      })
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    // Retrieve the stored email from AsyncStorage
    AsyncStorage.getItem('userEmail')
      .then((storedEmail) => {
        if (storedEmail) {
          setEmail(storedEmail);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <TailwindProvider>
      <View>
        <View className="flex-1 mt-72 left-10">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            className=" bg-slate-200 h-14 w-80 rounded-md"
          />
        </View>
        <View className="mt-3 left-10">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            className=" bg-slate-200 h-14 w-80 rounded-md"
          />
        </View>

        <View className="mt-3 left-20">
          <TouchableOpacity onPress={handleLogin}>
            <View className="h-14 w-80 bg-blue-700 right-10 rounded-xl">
              <Text className="mt-3 text-center text-3xl">Login</Text>
            </View>
          </TouchableOpacity>
          <View className="left-5">
            <TouchableOpacity>
              <Text className="mt-4 left-14">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View className="h-14 w-80 right-10 mt-5 bg-indigo-200 flex-row">
              <View className="mt-2 left-2">
                <Icon name="facebook" size={30} color="#1d4ed8" />
              </View>
              <Text className="mt-3 text-blue-700 left-7 text-3xl ">
                Sign In with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="bg-red-200 h-14 w-80 right-10 mt-2 flex-row">
              <View className="mt-2 left-3">
                <Icon name="google" size={30} color="#e11d48" />
              </View>
              <Text className="mt-3 left-10 text-3xl text-rose-600 ">
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="bg-stone-300 h-14 w-80 right-10 mt-2 flex-row">
              <View className="mt-2 left-3">
                <Icon name="appstore" size={30} color="#1c1917" />
              </View>
              <Text className="mt-3 left-11 text-3xl text-stone-700 ">
                Sign In with Apple
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="mt-6 left-7">
              Don't have an account? Create one
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default LoginScreens;

