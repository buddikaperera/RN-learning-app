import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../context/auth";
import FooterTabs from "../nav/FooterTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinkContext } from "../context/link";
import axios from "axios";
import PreviewCard from "../links/PreviewCard";

const Home = ({ navigation }) => {
    const [state, setState] = useContext(AuthContext);
    const [links, setLinks] = useContext(LinkContext);

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        const { data } = await axios.get(`/links`);
        //console.log("dddd", data);
        setLinks(data);
    };

    const handlePress = (link) => {
        navigation.navigate("LinkView", { link });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text
                title
                center
                light
                style={{ paddingTop: 3, fontSize: 19, paddingBottom: 15 }}
            >
                Recent Links
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                {links &&
                    links.map((link) => (
                        <View key={link._id} style={{ alignItems: "center" }}>
                            <PreviewCard
                                {...link.urlPreview}
                                link={link}
                                handlePress={handlePress}
                            />
                            {/*  <PreviewCard
                                {...link.urlPreview}
                                handlePress={handlePress}
                                link={link}
                         /> */}
                        </View>
                    ))}
            </ScrollView>

            <FooterTabs />
        </SafeAreaView>
    );
};

export default Home;
