import { View, ScrollView, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import FooterTabs from "../nav/FooterTabs";
import { SafeAreaView } from "react-native";
import Text from "@kaloraat/react-native-text";
import SubmitButton from "../components/auth/SubmitButton";

import orgs from "@uehreka/open-graph-scraper-react-native";
import urlRegex from "url-regex";
import PreviewCard from "../links/PreviewCard";
import axios from "axios";
import { LinkContext } from "../context/link";

const Post = ({ navigation }) => {
    const [links, setLinks] = useContext(LinkContext);
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [urlPreview, setUrlPreview] = useState({});

    const handleChange = async (text) => {
        console.log(text);

        try {
            setLoading(true);
            setLink(text);

            if (urlRegex({ strict: false }).test(text)) {
                orgs({ url: text }, (error, results, response) => {
                    console.log(results);

                    if (results.success) {
                        setUrlPreview(results);
                    }
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
            // setTimeout(() => {
            //     console.log("Link Paste", text);
            //     setLoading(false);
            // }, 1000);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        console.log("title and link", title, link, urlPreview);

        if (!link || !title) {
            alert("Paste URL and Title..!");
            return;
        }
        try {
            const { data } = await axios.post("/post-link", {
                title,
                link,
                urlPreview,
            });

            console.log("data----->handleSubmit", data);
            //setLinks([...links, data]); ///change the order
            ///update link context
            setLinks([data, ...links]);
            setTimeout(() => {
                alert("Link Posted");
                navigation.navigate("Home", {
                    reloadScreen: true,
                });
            }, 500);
        } catch (error) {}
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text light center style={{ paddingTop: 35 }}>
                    Past Website URL
                </Text>
                <TextInput
                    value={link}
                    onChangeText={(text) =>
                        handleChange(text, text.trim(), true)
                    }
                    placeholder="Paste the URL"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{
                        borderWidth: 1,
                        borderColor: "#04AA6D",
                        height: 50,
                        marginVertical: 35,
                        marginHorizontal: 18,
                        padding: 12,
                        borderRadius: 31,
                    }}
                />
                <TextInput
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    placeholder="Give a title"
                    autoCapitalize="sentences"
                    style={{
                        borderWidth: 1,
                        borderColor: "#04AA6D",
                        height: 50,
                        marginVertical: 4,
                        marginHorizontal: 18,
                        padding: 12,
                        borderRadius: 31,
                    }}
                />
                {urlPreview.success && (
                    <View
                        style={{
                            marginTop: 30,
                            alignItems: "center",
                        }}
                    >
                        <PreviewCard {...urlPreview} />
                    </View>
                )}

                <View style={{ paddingTop: 8 }}>
                    <SubmitButton
                        title="Submit"
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />
                </View>
            </ScrollView>

            <FooterTabs />
        </SafeAreaView>
    );
};

export default Post;
