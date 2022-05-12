import { View } from "react-native";
import React, { useContext } from "react";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../context/auth";
import FooterTabs from "../nav/FooterTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinkContext } from "../context/link";

const Home = () => {
    const [state, setState] = useContext(AuthContext);
    const [links, setLinks] = useContext(LinkContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text title center light>
                Home
            </Text>
            <Text>{JSON.stringify(links, null, 3)}</Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    );
};

export default Home;
