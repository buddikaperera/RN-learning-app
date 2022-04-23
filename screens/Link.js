import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import FooterTabs from "../nav/FooterTabs";

const Link = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Link Screen</Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    );
};

export default Link;
