import { View } from "react-native";
import React, { useContext } from "react";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../context/auth";
import FooterTabs from "../nav/FooterTabs";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [state, setState] = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text title center light>
                Home
            </Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    );
};

export default Home;
