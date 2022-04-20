import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CircleLogo = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
                source={require("../../assets/mylogo.png")}
                style={{ height: 200, width: 200, marginVertical: 14 }}
            />
        </View>
    );
};

export default CircleLogo;

const styles = StyleSheet.create({});
