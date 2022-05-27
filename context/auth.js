import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API } from "../config";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({ user: null, token: "" });

    const navigation = useNavigation();

    let token = state && state.token ? state.token : "";

    axios.defaults.baseURL = API;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    ////handle expire token 401 error

    axios.interceptors.response.use(
        async function (response) {
            return response;
        },
        async function (error) {
            let res = error.response;

            if (
                res.status === 401 &&
                res.config &&
                !res.config.__isRetryRequest
            ) {
                await AsyncStorage.removeItem("@auth");
                setState({ user: null, token: "" });
                navigation.navigate("SignIn");
            }
        }
    );

    useEffect(() => {
        const loadFromAsyncStorage = async () => {
            let data = await AsyncStorage.getItem("@auth");

            // console.log("data", data);

            try {
                //setState({ ...state, user: as.user, token: as.token });
                //console.log("loadFromAsyncStorage DONE");

                if (data !== null) {
                    const as = JSON.parse(data);
                    setState({ ...state, user: as.user, token: as.token });
                    console.log("loadFromAsyncStorage DONE");
                } else {
                    //setState({ user: null, token: "" });
                    setState({ ...state, user: null, token: "" });
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadFromAsyncStorage();
    }, []);

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
