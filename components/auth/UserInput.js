import React from "react";

import { StyleSheet, TextInput, View } from "react-native";
import Text from "@kaloraat/react-native-text";

const UserInput = (props) => {
    const { name, setValue, value } = props;
    return (
        <View style={{ marginHorizontal: 25 }}>
            <Text semi color="#ff2222">
                {name}
            </Text>
            <TextInput
                style={{
                    borderBottomWidth: 0.5,
                    height: 48,
                    borderBottomColor: "#8e93a1",
                    marginBottom: 30,
                }}
                value={value}
                onChangeText={(text) => setValue(text)}
            />
        </View>
    );
};

export default UserInput;

const styles = StyleSheet.create({});
