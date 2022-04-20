import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Text from "@kaloraat/react-native-text";
import React, { useState } from "react";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignIn = ({ navigation }) => {
    console.log("navigation", navigation);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);

        if (!email || !password) {
            alert("Input filed required ..!");
            setLoading(false);
            return;
        }
        //192.168.8.100:8000/api/
        http: console.log("SIGN IN REQUEST =>", email, password);
        try {
            const { data } = await axios.post(
                "http://192.168.8.100:8000/api/signin",
                {
                    email,
                    password,
                }
            );
            setLoading(false);
            console.log("SIGN IN SUCCESS =>", data);
            alert("Sign in  successful");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{
                justifyContent: "center",

                //  flex: 1,
            }}
        >
            <View style={{ marginVertical: 90 }}>
                <CircleLogo />
                <Text large center>
                    Sign In
                </Text>

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
                    title="Sign In"
                    handleSubmit={handleSubmit}
                    loading={loading}
                />
                <Text small center>
                    Not yet Registered?{" "}
                    <Text
                        color="#ff2222"
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        Sign Up
                    </Text>
                </Text>
                <Text
                    onPress={() => console.log("Forget Password")}
                    small
                    center
                    color="orange"
                    style={{ marginTop: 12 }}
                >
                    Forget Password?
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default SignIn;

const styles = StyleSheet.create({});
