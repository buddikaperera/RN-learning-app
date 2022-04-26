import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CircleLogo = ({ children }) => {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 10,
                paddingBottom: 20,
            }}
        >
            <View
                style={{
                    height: 190,
                    width: 190,
                    backgroundColor: "#fff",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {children ? (
                    children
                ) : (
                    <Image
                        source={require("../../assets/mylogo.png")}
                        style={{ height: 200, width: 200, marginVertical: 14 }}
                    />
                )}
            </View>
        </View>
    );
};

export default CircleLogo;

const styles = StyleSheet.create({});
