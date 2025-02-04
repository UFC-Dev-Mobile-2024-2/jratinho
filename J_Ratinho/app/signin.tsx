import {StyleSheet, View, Text} from "react-native";
import {Link} from "expo-router";

import Button from "@/components/Button";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Signin() {
    return (
        <View style={local.container}>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
});
