import { View, Image, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PreviewCard = ({
    ogTitle = "Untitled",
    ogDescription = "No Description provided",
    ogImage = "https://via.placeholder.com/500x500.png?text=Image",
    handlePress = (f) => f,
    link = {},
    showIcons = false,
}) => {
    console.log("LINK  IN  PREVIEW CARDS ", link);
    return (
        <View
            style={{
                height: 280,
                backgroundColor: "#fff",
                width: "92%",
                borderRadius: 14,
                shadowColor: "#171717",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                marginBottom: 20,
            }}
        >
            <Image
                style={{
                    height: "35%",
                    width: "100%",
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                }}
                source={{ uri: ogImage.url }}
            />
            {showIcons && (
                <React.Fragment>
                    <View
                        style={{
                            position: "absolute",
                            right: 20,
                            top: 20,
                            //flexDirection: "row",
                        }}
                    >
                        <FontAwesome5 name="eye" size={25} color="#ff9900" />
                        <Text center color="#ff9900">
                            {link.views}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 80,
                            top: 20,
                            //flexDirection: "row",
                        }}
                    >
                        <FontAwesome5 name="heart" size={25} color="#ff9900" />
                        <Text center color="#ff9900">
                            {link.likes.length}
                        </Text>
                    </TouchableOpacity>
                </React.Fragment>
            )}

            <TouchableOpacity onPress={() => handlePress(link)}>
                <View style={{ padding: 5, height: 70 }}>
                    <Text medium style={{ paddingTop: 5, paddingBottom: 5 }}>
                        {ogTitle}
                    </Text>
                    <Text semi>{ogDescription}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PreviewCard;
