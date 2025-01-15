// src/navegacion/TabNavegacion.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from "../tabs/TabScreen"; 

const Tab = createBottomTabNavigator();

const TabNavegacion = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={TabScreen}
                options={{ title: "Inicio" }}
            />
        </Tab.Navigator>
    );
};

export default TabNavegacion;
