import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import { AuthContext } from "../context/auth";
import HeaderTabs from "./HeaderTabs";
import Account from "../screens/Account";
import Post from "../screens/Post";
import Link from "../screens/Link";
import ForgotPassword from "../screens/ForgotPassword";
import LinkView from "../screens/LinkView";

const Stack = createNativeStackNavigator();

export default function ScreensNav() {
    const [state, setState] = useContext(AuthContext);

    const authenticated = state && state.user !== null && state.token !== "";

    console.log("authenticated", authenticated);

    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            //screenOptions={{ headerShown: false }}
        >
            {authenticated ? (
                <React.Fragment>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: "Links Daily",
                            headerTitleAlign: "center",
                            headerRight: () => <HeaderTabs />,
                        }}
                    />
                    <Stack.Screen
                        name="Account"
                        component={Account}
                        options={{
                            headerBackTitle: "Back",
                        }}
                    />
                    <Stack.Screen
                        name="Post"
                        component={Post}
                        options={{
                            title: "Posts",
                            headerTitleAlign: "center",
                            // headerRight: () => <HeaderTabs />,
                        }}
                    />
                    <Stack.Screen name="Link" component={Link} />
                    <Stack.Screen
                        name="LinkView"
                        component={LinkView}
                        options={{
                            title: "", //headerTransparent: true
                        }}
                    />
                </React.Fragment>
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
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                    />
                </React.Fragment>
            )}
        </Stack.Navigator>
    );
}
