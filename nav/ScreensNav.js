import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import { AuthContext } from "../context/auth";
import HeaderTabs from "./HeaderTabs";

const Stack = createNativeStackNavigator();

export default function ScreensNav() {
    const [state, setState] = useContext(AuthContext);

    const authenticated = state && state.user !== null && state.token !== "";

    console.log("authenticated", authenticated);

    return (
        <Stack.Navigator
            initialRouteName="Home"
            //screenOptions={{ headerShown: false }}
        >
            {authenticated ? (
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Links Daily",
                        headerTitleAlign: "center",
                        headerRight: () => <HeaderTabs />,
                    }}
                />
            ) : (
                <React.Fragment>
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                </React.Fragment>
            )}
        </Stack.Navigator>
    );
}
