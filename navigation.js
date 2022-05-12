import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import { AuthProvider } from "./context/auth";

import ScreensNav from "./nav/ScreensNav";
import { LinkProvider } from "./context/link";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <LinkProvider>
                    <ScreensNav />
                </LinkProvider>
            </AuthProvider>
        </NavigationContainer>
    );
}
