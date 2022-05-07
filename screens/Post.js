import { View, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import FooterTabs from "../nav/FooterTabs";
import { SafeAreaView } from "react-native";
import Text from "@kaloraat/react-native-text";
import SubmitButton from "../components/auth/SubmitButton";

const Post = () => {
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");

    const handleChange = async (text) => {
        console.log(text);

        try {
            setLoading(true);
            setLink(text);
            setTimeout(() => {
                console.log("Link Paste", text);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        console.log("title and link", title, link);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text light center style={{ paddingTop: 35 }}>
                    Past Website URL
                </Text>
                <TextInput
                    value={link}
                    onChangeText={(text) => handleChange(text)}
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
                <View style={{ paddingTop: 35 }}>
                    <SubmitButton
                        title="Submit"
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />
                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    );
};

export default Post;
