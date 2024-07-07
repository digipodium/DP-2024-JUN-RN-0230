import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Alert } from "react-native";
import ConnectFirebase from "./Screens/connectFirebase";
import Home from "./Screens/home";
import Avoider from "./Screens/KeyBoardAvoidingComponent";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  // const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#7C75D5",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="avoid" component={Avoider} />
        <Stack.Screen name="firebase" component={ConnectFirebase} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
      </Stack.Navigator> */}
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
