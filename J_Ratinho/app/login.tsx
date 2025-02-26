import React from "react";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {Text, TextInput, Button} from "react-native-paper";
import {Link} from "expo-router";
import {useRouter} from "expo-router";

import {styles} from "@/constants/styles";
import { Colors } from "@/constants/Colors";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <View style={local.container}>
            <Image style={styles.marca} source={require("@/assets/images/marca.png")} resizeMode="contain"/>
            <Text style={local.title}>Bem vindo de volta!</Text>
            
            <View style={{width: "80%"}}>
                <TextInput
                    style={local.input}
                    label="E-mail"
                    mode="outlined"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={local.input}
                    label="Senha"
                    mode="outlined"
                    onChangeText={setPassword}
                    value={password}
                />
            </View>

            <TouchableOpacity onPress={() => router.push("/esqueci-senha")}>
                <Text style={local.link}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <Button style={local.button} mode="contained" onPress={() => router.push("/")}> 
                Entrar 
            </Button>

            <TouchableOpacity onPress={() => router.push("/cadastrar")}>
                <Text style={local.link}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>

        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "regular",
        color: "#9DB1F3",
        marginBottom: 20,
    },
    h1: {
        color: Colors.light.cian,
        marginBottom: 32,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#3333"
    },
    button: {
        minWidth: 256,
        marginBottom: 8
    }
});
