import React from "react";
import {StyleSheet, View, Image} from "react-native";
import {Text, TextInput, Button} from "react-native-paper";
import {Link} from "expo-router";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Login() {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");

    return (
        <View style={local.container}>
            <Image style={styles.marca} source={require("@/assets/images/marca.svg")} resizeMode="contain"/>
            <Text style={local.h1} variant="headlineLarge">Crie sua conta</Text>
            <View style={{width: "80%"}}>
                <TextInput
                    label="Nome"
                    mode="outlined"
                    style={local.input}
                    onChangeText={onChangeText}
                    value={text}
                />
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
                <Text style={{marginBottom: 16}} variant="bodySmall">Sua senha deve conter ao menos 8 caracteres.</Text>
            </View>
            <Button style={local.button} mode="contained">
                <Link href="/">Criar conta</Link>
            </Button>
            <Button style={local.button}>
                <Link href="/login">Já tem uma conta? Faça login</Link>
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
        color: colors.light.tertiary,
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
