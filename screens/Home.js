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

    const handlePress = async (link) => {
        await axios.put(`/view-count/${link._id}`);

        ///update the link in the context
        setLinks(() => {
            const index = links.findIndex((l) => l._id === link._id);
            links[index] = { ...link, views: link.views + 1 };
            return [...links];
        });
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
                                showIcons={true}
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
