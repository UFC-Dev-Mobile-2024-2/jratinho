import React from "react";
import {StyleSheet, View, Text, Image, TextInput} from "react-native";
import {Link} from "expo-router";

import Button from "@/components/Button";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Login() {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState("");

    return (
        <View style={local.container}>
            <Image style={styles.marca} source={require("@/assets/images/marca.svg")} resizeMode="contain"/>
            <Text style={[styles.h1, local.h1]}>Criar sua conta</Text>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Digite aqui seu nome"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Digite aqui seu e-mail"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Digite aqui sua senha"
                />
            </View>
            <Button label="Entrar" color="green" route="/"/>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.white,
        alignItems: "center",
    },
    h1: {
        color: colors.dark.blue,
    },
});
