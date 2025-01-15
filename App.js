import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/paginas/tabs/Login.js";
import RegisterScreen from "./src/paginas/tabs/RegisterScreen.js";
import TabScreen from "./src/paginas/tabs/TabScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registrar" component={RegisterScreen} />
        <Stack.Screen name="Tab" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
