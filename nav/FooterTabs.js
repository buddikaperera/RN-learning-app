import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Account from "../screens/Account";
import { Divider } from "react-native-elements";

export const Tab = ({ name, text, handlePress }) => (
    <TouchableOpacity>
        <React.Fragment>
            <FontAwesome5
                name={name}
                size={25}
                style={{ marginBottom: 3, alignSelf: "center" }}
                onPress={handlePress}
            />
            <Text>{text}</Text>
        </React.Fragment>
    </TouchableOpacity>
);

const FooterTabs = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        console.log("handlePress");
    };
    return (
        <React.Fragment>
            <Divider width={1} />
            <View
                style={{
                    margin: 10,
                    marginHorizontal: 30,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Tab
                    text="home"
                    name="home"
                    handlePress={() => navigation.navigate("Home")}
                />
                <Tab
                    text="post"
                    name="plus-square"
                    handlePress={() => navigation.navigate("Post")}
                />
                <Tab
                    text="Link"
                    name="list-ol"
                    handlePress={() => navigation.navigate("Link")}
                />
                <Tab
                    text="Account"
                    name="user"
                    handlePress={() => navigation.navigate("Account")}
                />
            </View>
        </React.Fragment>
    );
};

export default FooterTabs;
