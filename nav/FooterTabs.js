import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const Tab = ({ name, text }) => (
    <TouchableOpacity>
        <React.Fragment>
            <FontAwesome5
                name={name}
                size={25}
                style={{ marginBottom: 3, alignSelf: "center" }}
            />
            <Text>{text}</Text>
        </React.Fragment>
    </TouchableOpacity>
);

const FooterTabs = () => {
    return (
        <View
            style={{
                margin: 10,
                marginHorizontal: 30,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Tab text="home" name="home" />
            <Tab text="post" name="plus-square" />
            <Tab text="Link" name="list-ol" />
            <Tab text="Account" name="user" />
        </View>
    );
};

export default FooterTabs;
