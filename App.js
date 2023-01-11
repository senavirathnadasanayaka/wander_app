import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Maps from "./screens/Maps";
import Hotel from "./screens/Hotels/Hotel";
import Area from "./screens/AREA/Area";
import Sigiriya from "./screens/AREA/Sigiriya";
import Nuwara from "./screens/AREA/Nuwara";
import Yala from "./screens/AREA/Yala";
import Sinharaja from "./screens/AREA/Sinharaja";
import Temple from "./screens/AREA/Temple";
import Hortan from "./screens/AREA/Hortan";
import Benthota from "./screens/AREA/Benthota";
import Pinnewala from "./screens/AREA/Pinnewala";
import Town from "./screens/AREA/Town";
import Galle from "./screens/AREA/Galle";
import Adams from "./screens/AREA/Adams";
import Discover from "./screens/Discover";
import Central from "./screens/Hotels/Central";
import Short from "./screens/Shorttrip/Short";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home1" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Hotel" component={Hotel} />
          <Stack.Screen name="Area" component={Area} />
          <Stack.Screen name="Adams" component={Adams} />
          <Stack.Screen name="Benthota" component={Benthota} />
          <Stack.Screen name="Hortan" component={Hortan} />
          <Stack.Screen name="Nuwara" component={Nuwara} />
          <Stack.Screen name="Pinnawala" component={Pinnewala} />
          <Stack.Screen name="Sigiriya" component={Sigiriya} />
          <Stack.Screen name="Sinharaja" component={Sinharaja} />
          <Stack.Screen name="Temple" component={Temple} />
          <Stack.Screen name="Town" component={Town} />
          <Stack.Screen name="Yala" component={Yala} />
          <Stack.Screen name="Galle" component={Galle} />
          <Stack.Screen name="Central" component={Central} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

