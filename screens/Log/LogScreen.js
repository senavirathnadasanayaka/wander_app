import { Text, View, Image } from "react-native";
import React, { useLayoutEffect,useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Zocial";

import Custom from "./Custom";
import CustomButton from "./CustomButton";
import { User } from "../../assets";


const LogScreen = () => {
  const navigation = useNavigation();
  const [username,setUsername] = useState("");
  const [Password,setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

const onSignInPressed =() => {
  console.warn("Sign In");
}


  return (
    <TailwindProvider>
      <View>
        <View className="flex-1 mt-72 left-10 ">
          
          <Custom
            placeholder=" user name"
            value={username}
            setValue={setUsername}
          />
        </View>
        <View className="mt-3 left-10">
          <Custom
            placeholder=" password"
            value={Password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View className="mt-3 left-20">
          <CustomButton text="Sign In" onPress={onSignInPressed} />
          <Text className="left-9 mt-3">Forgot Password?</Text>
          <View className=" h-14 w-80 right-10 mt-5 bg-indigo-200 flex-row">
            <View className="mt-2 left-2">
              <Icon name="facebook" size={30} color="#1d4ed8" />
            </View>
            <Text className="text-center mt-3 text-blue-700 left-10 ">
              Sign In with Facebook
            </Text>
          </View>
          <View className=" bg-red-200 h-14 w-80 right-10 mt-2 flex-row">
            <View className="mt-2 left-3">
              <Icon name="google" size={30} color="#e11d48" />
            </View>
            <Text className="text-center mt-3 text-rose-600 left-12">
              Sign In with Google
            </Text>
          </View>
          <View className=" bg-stone-300 h-14 w-80 right-10 mt-2 flex-row">
            <View className="mt-2 left-3">
              <Icon name="appstore" size={30} color="#1c1917" />
            </View>
            <Text className="text-center mt-3 text-stone-700 left-14">
              Sign In with Apple
            </Text>
          </View>
          <Text className="mt-6 right-10">
            Don't have an account? Create one
          </Text>
        </View>
      </View>
    </TailwindProvider>
  );
};

export default LogScreen;
