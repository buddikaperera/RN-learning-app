import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default function App() {
    return (
        <View style={styles.container}>
            <SignIn />
        </View>
    );
}

///flex box top left  flex: 1,backgroundColor: '#fff',
/// center left  flex: 1 /justifyContent: 'center'
///  bottom left flex: 1 /justifyContent: 'flex-end'

/// top right  flex: 1 //alignItems: 'flex-end',
///center right   flex: 1 /justifyContent: 'center' alignItems: 'flex-end',
///bottom right flex: 1 /justifyContent: 'flex-end' alignItems: 'flex-end',
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        //alignItems: 'center',
        justifyContent: "center",
    },
});
