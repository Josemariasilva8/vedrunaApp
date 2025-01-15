
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../tabs/Login"; 
import RegisterScreen from "../tabs/RegisterScreen"; 

const Stack = createNativeStackNavigator();

const StackNavegacionPubli = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ title: "Crear Cuenta" }}
            />
        </Stack.Navigator>
    );
};

export default StackNavegacionPubli;
