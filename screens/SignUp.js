import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Text from "@kaloraat/react-native-text";
import React, { useState } from "react";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);

        if (!name || !email || !password) {
            alert("Input filed required ..!");
            setLoading(false);
            return;
        }

        console.log("SIGN UP REQUEST =>", name, email, password);
        try {
            const { data } = await axios.post(
                "http://localhost:8000/api/signup",
                {
                    name,
                    email,
                    password,
                }
            );
            setLoading(false);
            console.log("SIGN IN SUCCESS =>", data);
            alert("Sign up successful");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <View style={{ justifyContent: "center" }}>
            <Text large center>
                Sign Up
            </Text>

            <UserInput
                name="Name"
                value={name}
                setValue={setName}
                autoCapitalize="words"
                autoCorrect={false}
            />
            <UserInput
                name="E-mail"
                value={email}
                setValue={setEmail}
                autoCompleteType="email"
                keyboardType="email-address"
            />
            <UserInput
                name="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
                autoCompleteType="password"
            />

            <SubmitButton
                title="Sign Up"
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
