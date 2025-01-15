import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnotherScreen from "../tabs/AnotherScreen"; 

const Stack = createNativeStackNavigator();

const StackB = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnotherScreen"
        component={AnotherScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default StackB;