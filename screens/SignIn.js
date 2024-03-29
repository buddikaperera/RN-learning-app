import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Text from "@kaloraat/react-native-text";
import React, { useContext, useState } from "react";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { API } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/auth";

const SignIn = ({ navigation }) => {
    /// console.log("navigation", navigation);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        setLoading(true);

        if (!email || !password) {
            alert("Input filed required ..!");
            setLoading(false);
            return;
        }
        //192.168.8.100:8000/api/
        console.log("SIGN IN REQUEST =>", email, password);
        try {
            // const { data } = await axios.post(`${API}/signin`, {
            const { data } = await axios.post(`/signin`, {
                email,
                password,
            });

            if (data.error) {
                setLoading(false);
                alert(data.error);
            } else {
                await AsyncStorage.setItem("@auth", JSON.stringify(data));
                setState(data);
                setLoading(false);
                console.log("SIGN IN SUCCESS =>", data);
                alert("Sign in  successful");
                navigation.navigate("Home");
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const loadFromAsyncStorage = async () => {
        ///try {
        let data = await AsyncStorage.getItem("@auth");
        console.log("FROM ASYNC STORAGE==>", data);
        // if(value !== null) {
        //   // value previously stored
        // }
        //} catch (e) {
        // error reading value
        // }
    };

    loadFromAsyncStorage();

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
                    onPress={() => navigation.navigate("ForgotPassword")}
                    small
                    center
                    color="orange"
                    style={{ marginTop: 12 }}
                >
                    Forgot Password?
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default SignIn;

const styles = StyleSheet.create({});
