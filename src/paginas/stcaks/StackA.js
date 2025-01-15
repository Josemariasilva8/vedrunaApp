import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SomeScreen from "../tabs/SomeScreen"; 

const Stack = createNativeStackNavigator();

const StackA = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SomeScreen"
        component={SomeScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default StackA;
