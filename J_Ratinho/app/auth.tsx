import React from "react";
import {StyleSheet, View, Platform, Image} from "react-native";
import {Text, Button} from "react-native-paper";
import {Link} from "expo-router";

import {Colors} from "@/constants/Colors";
import {styles} from "@/constants/styles";

export default function Auth() {
    return (
        <View style={local.container}>
            <Image style={styles.marca} source={require("@/assets/images/marca.svg")} resizeMode="contain"/>
            <Text style={local.h2} variant="headlineLarge">Seja bem-vindo(a) ao aplicativo da fundação J. Ratinho</Text>
            <Button style={local.button} mode="contained">
                <Link href="/signin">Cadastre-se agora!</Link>
            </Button>
            <Button style={local.button} mode="contained-tonal">
                <Link href="/login">Já tenho uma conta</Link>
            </Button>
        </View>
    );
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
    },
    h2: {
        maxWidth: 300,
        textAlign: "center",
        color: "#FFFFFF",
        marginBottom: 32,
    },
    button: {
        minWidth: 256,
        margin: 8,
    }
});
