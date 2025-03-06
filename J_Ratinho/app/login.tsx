import React from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { Link, router } from "expo-router";
import axios from "axios";  

import { styles } from "@/constants/styles";
import { Colors } from "@/constants/Colors";

const API_URL = "https://jratinho.onrender.com/api/auth/local";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleLogin = async () => {
        setError(null);
        setLoading(true);
        try {
            const response = await axios.post(API_URL, {
                identifier: email,
                password: password,
            });

            
            localStorage.setItem("jwt", response.data.jwt);
            localStorage.setItem("user", JSON.stringify(response.data.user));            
            router.replace("/");
        } catch (error) {   
            setError("E-mail ou senha incorretos");
            setLoading(false);
        }
    };

    return (
        <View style={local.container}>
            <Image 
                style={styles.marca} 
                source={require("@/assets/images/marca.svg")} 
                resizeMode="contain"
            />
            <Text style={local.h1} variant="headlineLarge">Entrar</Text>
            
            <View style={{ width: "80%" }}>
                <TextInput
                    label="E-mail"
                    mode="outlined"
                    style={local.input}
                    onChangeText={(text) => {
                        setEmail(text);
                        setError(null);
                    }}
                    //onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    style={local.input}
                    onChangeText={(text) => {
                        setPassword(text);
                        setError(null); // Limpa o erro ao digitar
                    }}
                    //onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                 {error && <Text style={local.errorText}>{error}</Text>}
            </View>

            <Button 
                style={local.button} 
                onPress={() => router.push("/password-recovery")}
            >
                Esqueci minha senha
            </Button>

            <Button 
                style={local.button} 
                mode="contained"
                onPress={handleLogin}
                loading={loading}
                disabled={loading}
            >
                Entrar
            </Button>

            <Button style={local.button}>
                <Link href="/signin" style={{ color: Colors.light.cian }}>
                    Não tem uma conta? Cadastre-se
                </Link>
            </Button>
        </View>
    );
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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