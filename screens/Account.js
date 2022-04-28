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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";

const Account = ({ navigation }) => {
    /// console.log("navigation", navigation);
    const [name, setName] = useState("");
    const [image, setImage] = useState({
        url: "",
        publicId: "",
    });
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [uploadImage, setUploadImage] = useState("");
    const [state, setState] = useContext(AuthContext);

    useEffect(() => {
        if (state) {
            const { name, email, image, role } = state.user;
            setEmail(email);
            setName(name);
            setRole(role);
            setImage(image);
        }
    }, []); ///[state]

    const handleUpload = async () => {
        let permissionResult =
            await ImagePicker.requestCameraPermissionsAsync();

        //console.log("permissionResult", permissionResult);

        if (permissionResult.granted === false) {
            alert("Camera access is required..!");
            return;
        }
        //get image from image library
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        });

        //console.log("PICKER RESULT ==>", pickerResult);

        if (pickerResult.cancelled === true) {
            return;
        }

        ///save state for preview
        let base64Image = `data:image/jpg;base64,${pickerResult.base64}`;
        ///console.log("PICKER base64Image ==>", base64Image);
        setUploadImage(base64Image);

        ///send back end to upload to cloudinary

        /// let token = state && state.token ? state.token : "";

        ///alert("ddddddddd");

        /// console.log("token  ==>", token);
        const { data } = await axios.post(
            "/upload-image",
            {
                image: base64Image,
            }
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // } assign in the context api
        );
        console.log("UPLOADED RESPONSE  ==>", data);
        ///update user info in the context and async storage
        const as = JSON.parse(await AsyncStorage.getItem("@auth"));
        as.user = data;
        await AsyncStorage.setItem("@auth", JSON.stringify(as));
        ///update context
        setState({ ...state, user: data });
        setImage(data.image);
        alert("Profile image saved");
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            const { data } = await axios.post(`/update-password`, {
                password,
            });

            if (data.error) {
                setLoading(false);
                alert(data.error);
            } else {
                alert("Password updated");
                setPassword("");
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            alert("Password update failed");
            setLoading(false);
        }
    };

    const loadFromAsyncStorage = async () => {
        ///try {
        let data = await AsyncStorage.getItem("@auth");
        /// console.log("FROM ASYNC STORAGE==>", data);
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
                <CircleLogo>
                    {image && image.url ? (
                        <Image
                            source={{ uri: image.url }}
                            style={{
                                height: 190,
                                width: 190,
                                borderRadius: 100,
                                marginVertical: 14,
                            }}
                        />
                    ) : uploadImage ? (
                        <Image
                            source={{ uri: uploadImage }}
                            style={{
                                height: 150,
                                width: 150,
                                borderRadius: 100,
                                marginVertical: 14,
                            }}
                        />
                    ) : (
                        <TouchableOpacity onPress={() => handleUpload()}>
                            <FontAwesome5
                                name="camera"
                                size={25}
                                color="orange"
                            />
                        </TouchableOpacity>
                    )}
                </CircleLogo>
                {image && image.url ? (
                    <TouchableOpacity onPress={() => handleUpload()}>
                        <FontAwesome5
                            name="camera"
                            size={25}
                            color="orange"
                            style={{
                                marginTop: -5,
                                marginBottom: 10,
                                alignSelf: "center",
                            }}
                        />
                    </TouchableOpacity>
                ) : null}

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
