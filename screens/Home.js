import { View } from "react-native";
import React, { useContext } from "react";
import Text from "@kaloraat/react-native-text";
import { AuthContext } from "../context/auth";

const Home = () => {
    const [state, setState] = useContext(AuthContext);

    return (
        <View>
            <Text>{JSON.stringify(state, null, 6)}</Text>
        </View>
    );
};

export default Home;
