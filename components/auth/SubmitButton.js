import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@kaloraat/react-native-text";
import React from "react";

const SubmitButton = ({ title }) => (
    <View>
        <TouchableOpacity
            style={{
                backgroundColor: "#ff9900",
                height: 50,
                marginBottom: 20,
                justifyContent: "center",
                marginHorizontal: 21,
                borderRadius: 24,
            }}
        >
            <Text bold medium center>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
);

export default SubmitButton;

const styles = StyleSheet.create({});
