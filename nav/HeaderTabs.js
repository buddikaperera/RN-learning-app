import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/auth";

const HeaderTabs = () => {
    const [state, setState] = useContext(AuthContext);

    const signOut = async () => {
        setState({ token: "", user: null });
        await AsyncStorage.removeItem("@auth");
    };

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={signOut}>
                <FontAwesome5 name="sign-out-alt" size={25} color="#ff9900" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HeaderTabs;
