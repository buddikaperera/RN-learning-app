import { View } from "react-native";
import Text from "@kaloraat/react-native-text";
import React from "react";
import FooterTabs from "../nav/FooterTabs";
import { SafeAreaView } from "react-native";

const Account = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Account Screen</Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    );
};

export default Account;
