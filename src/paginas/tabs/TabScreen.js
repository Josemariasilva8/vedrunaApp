import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function PublicacionesTab() {
  return (
    <View style={styles.tabContainer}>
      <Text>Publicaciones Tab</Text>
    </View>
  );
}

function MisPublicacionesTab() {
  return (
    <View style={styles.tabContainer}>
      <Text>Mis Publicaciones Tab</Text>
    </View>
  );
}

function PerfilTab() {
  return (
    <View style={styles.tabContainer}>
      <Text>Perfil Tab</Text>
    </View>
  );
}

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Publicaciones" component={PublicacionesTab} />
      <Tab.Screen name="Mis Publicaciones" component={MisPublicacionesTab} />
      <Tab.Screen name="Perfil" component={PerfilTab} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import RegisterScreen from "./RegisterScreen";


