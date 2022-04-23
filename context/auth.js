import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API } from "../config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({ user: null, token: "" });

    axios.defaults.baseURL = API;

    useEffect(() => {
        const loadFromAsyncStorage = async () => {
            let data = await AsyncStorage.getItem("@auth");
            const as = JSON.parse(data);

            try {
                setState({ ...state, user: as.user, token: as.token });
                console.log("loadFromAsyncStorage DONE");
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
