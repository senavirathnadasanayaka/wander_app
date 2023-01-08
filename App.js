import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import discover from "./screens/Discover";
import Maps from "./screens/Maps";
import Hotel from "./screens/Hotel";
import Area from "./screens/Area";
import Tabs from "./navigation/Tabs";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
   <Tabs />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={discover} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Hotel" component={Hotel} />
          <Stack.Screen name="Area" component={Area} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

