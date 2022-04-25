// import { View, ScrollView, SafeAreaView } from "react-native";
// import Text from "@kaloraat/react-native-text";
// import React, { useContext } from "react";
// import FooterTabs from "../nav/FooterTabs";

// import { AuthContext } from "../context/auth";

// const Account = () => {
//     const [state, setState] = useContext(AuthContext);

//     const { name, email, role } = state.user;
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <ScrollView>
//                 <View>
//                     <Text title bold>
//                         {name}
//                     </Text>
//                     <Text medium>{email}</Text>
//                     <Text light>{role}</Text>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default Account;

import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Text from "@kaloraat/react-native-text";
import React, { useContext, useEffect, useState } from "react";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { API } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/auth";

const Account = ({ navigation }) => {
    /// console.log("navigation", navigation);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [state, setState] = useContext(AuthContext);

    useEffect(() => {
        if (state) {
            const { name, email, image, role } = state.user;
            setEmail(email);
            setName(name);
            setRole(role);
        }
    }, [state]);

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
                <Text large center style={{ paddingBottom: 5 }}>
                    {name}
                </Text>
                <Text medium center style={{ paddingBottom: 5 }}>
                    {email}
                </Text>
                <Text light center style={{ paddingBottom: 20 }}>
                    {role}
                </Text>
                <UserInput
                    name="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    autoCompleteType="password"
                />
                <SubmitButton
                    title="Update Password"
                    handleSubmit={handleSubmit}
                    loading={loading}
                />
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Account;

const styles = StyleSheet.create({});
