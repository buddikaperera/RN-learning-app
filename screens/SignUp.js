import { StyleSheet, TextInput, View } from "react-native";
import Text from "@kaloraat/react-native-text";
import React, { useState } from "react";
import UserInput from "../components/auth/UserInput";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <View style={{ justifyContent: "center" }}>
            <Text large center>
                Sign Up
            </Text>

            <UserInput name="Name" value={name} setValue={setName} />
            <UserInput name="E-mail" value={email} setValue={setEmail} />
            <UserInput
                name="Password"
                value={password}
                setValue={setPassword}
            />
            <Text>{JSON.stringify({ name, email, password }, null, 6)}</Text>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
