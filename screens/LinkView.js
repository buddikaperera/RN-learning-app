import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import FooterTabs from "../nav/FooterTabs";
import { WebView } from "react-native-webview";

const LinkView = ({ route }) => {
    const [webLink, setWebLink] = useState("");

    useEffect(() => {
        if (route.params?.link) {
            if (route.params.link.link.includes("http" || "https")) {
                setWebLink(route.params.link.link);
            } else {
                setWebLink(`http://${route.params.link.link}`);
            }
        }
    }, [route, route.params?.link]);

    return <WebView startInLoadingState source={{ uri: webLink }} />;
};

export default LinkView;
{
    /*<SafeAreaView style={{ flex: 1 }}>
            <Text>{JSON.stringify(route.params.link.link)}</Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterTabs />
            </View>
    </SafeAreaView>*/
}
