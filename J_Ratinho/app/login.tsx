import React from "react";
import {StyleSheet, View, Image} from "react-native";
import {Text, TextInput, Button} from "react-native-paper";
import {Link} from "expo-router";

import {styles} from "@/constants/styles";
import { Colors } from "@/constants/colors";

export default function Login() {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");

    return (
        <View style={local.container}>
            <Image style={styles.marca} source={require("@/assets/images/marca.svg")} resizeMode="contain"/>
            <Text style={local.h1} variant="headlineLarge">Entrar</Text>
            <View style={{width: "80%"}}>
                <TextInput
                    label="E-mail"
                    mode="outlined"
                    style={local.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    style={local.input}
                    onChangeText={onChangeNumber}
                    value={number}
                />
            </View>
            <Button style={local.button}>Esqueci minha senha</Button>
            <Button style={local.button} mode="contained">
                <Link href="/">Entrar</Link>
            </Button>
            <Button style={local.button}>
                <Link href="/signin">Não tem uma conta? Cadastre-se</Link>
            </Button>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    h1: {
        color: Colors.light.cian,
        marginBottom: 32,
    },
    input: {
        marginBottom: 8
    },
    button: {
        minWidth: 256,
        marginBottom: 8
    }
});
