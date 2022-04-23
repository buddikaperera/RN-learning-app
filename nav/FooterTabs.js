import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";
import Account from "../screens/Account";
import { Divider } from "react-native-elements";

export const Tab = ({ name, text, handlePress, screenName, routeName }) => {
    const activeScreenColor = screenName === routeName && "orange";

    return (
        <TouchableOpacity onPress={handlePress}>
            <FontAwesome5
                name={name}
                size={25}
                style={{ marginBottom: 3, alignSelf: "center" }}
                color={activeScreenColor}
            />
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const FooterTabs = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log("useRoute", route);

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
                    text="Home"
                    name="home"
                    handlePress={() => navigation.navigate("Home")}
                    screenName="Home"
                    routeName={route.name}
                />
                <Tab
                    text="Post"
                    name="plus-square"
                    handlePress={() => navigation.navigate("Post")}
                    screenName="Post"
                    routeName={route.name}
                />
                <Tab
                    text="Link"
                    name="list-ol"
                    handlePress={() => navigation.navigate("Link")}
                    screenName="Link"
                    routeName={route.name}
                />
                <Tab
                    text="Account"
                    name="user"
                    handlePress={() => navigation.navigate("Account")}
                    screenName="Account"
                    routeName={route.name}
                />
            </View>
        </React.Fragment>
    );
};

export default FooterTabs;
