// import { View, Text, SafeAreaView } from "react-native";
// import React from "react";

// const ForgotPassword = () => {
//     return (
//         <SafeAreaView>
//             <Text>ForgotPassword</Text>
//         </SafeAreaView>
//     );
// };

// export default ForgotPassword;

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

const ForgotPassword = ({ navigation }) => {
    /// console.log("navigation", navigation);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [resetCode, setResetCode] = useState("");
    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        setLoading(true);

        if (!email) {
            alert("E-mail is required ..!");
            setLoading(false);
            return;
        }

        console.log("RESET PASSWORD REQUEST =>", email);
        try {
            const { data } = await axios.post(`/forgot-password`, {
                email,
            });

            if (data.error) {
                setLoading(false);
                alert(data.error);
            } else {
                console.log("RESET PASSWORD RESPONSE =>", data);
                setLoading(false);
                setVisible(true);
                // console.log("SIGN IN SUCCESS =>", data);
                //alert("Sign in  successful");
                //navigation.navigate("Home");
            }
        } catch (error) {
            alert("Error sending E-mail ..! Please try again ..!");
            console.log(error);
            setLoading(false);
            setVisible(false);
        }
    };

    //  const loadFromAsyncStorage = async () => {
    //      ///try {
    //      let data = await AsyncStorage.getItem("@auth");
    //      console.log("FROM ASYNC STORAGE==>", data);
    //      // if(value !== null) {
    //      //   // value previously stored
    //      // }
    //      //} catch (e) {
    //      // error reading value
    //      // }
    //  };

    ///loadFromAsyncStorage();

    const handlePasswordReset = async () => {
        console.log("HANDLE PASSWORD RESET =>", email, password, resetCode);

        try {
            const { data } = await axios.post(`/reset-password`, {
                email,
                password,
                resetCode,
            });

            console.log("RESET PASSWORD RESPONSE =>", data);
            if (data.error) {
                setLoading(false);
                alert(data.error);
            } else {
                alert("Now you can login with the password");
                navigation.navigate("SignIn");
            }
        } catch (error) {
            alert("Error handlePasswordReset Please try again ..!");
            console.log(error);
            setLoading(false);
            //setVisible(false);
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{
                justifyContent: "center",

                //  flex: 1,
            }}
        >
            <View style={{ marginVertical: 60 }}>
                <CircleLogo />
                <Text large center style={{ paddingBottom: 22 }}>
                    Forgot Password
                </Text>
                <UserInput
                    name="E-mail"
                    value={email}
                    setValue={setEmail}
                    autoCompleteType="email"
                    keyboardType="email-address"
                />
                {visible && (
                    <React.Fragment>
                        <UserInput
                            name="New Password"
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={true}
                            autoCompleteType="password"
                        />

                        <UserInput
                            name="Reset Code"
                            value={resetCode}
                            setValue={setResetCode}
                            autoCapitalize="words"
                            autoCorrect={false}
                        />
                    </React.Fragment>
                )}
                <View style={{ marginVertical: 12 }}>
                    <SubmitButton
                        title={
                            visible
                                ? "Update Password"
                                : "Request Password Reset"
                        }
                        handleSubmit={
                            visible ? handlePasswordReset : handleSubmit
                        }
                        loading={loading}
                    />
                    <Text small center>
                        Registered?{" "}
                        <Text
                            color="#ff2222"
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            Sign In
                        </Text>
                    </Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
