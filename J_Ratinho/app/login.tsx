import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Alert } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useRouter, router } from "expo-router";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "@/constants/styles";
import { Colors } from "@/constants/Colors";

const API_URL = "https://jratinho.onrender.com/api/auth/local";
import Logo from '@/components/logos/Logos';

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


			await AsyncStorage.setItem("jwt", response.data.jwt);
			await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
			router.replace("/home");
		} catch (error) {
			setError("E-mail ou senha incorretos");
			setLoading(false);
		}
	};

	return (
		<KeyboardAvoidingView
			style={local.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View style={local.header}>
				<Logo LogoVariant='colored' LogoWidth={150} />
			</View>
			<Text style={{ marginBottom: 32, color: '#9DB1F3' }} variant="headlineLarge">Bem-vindo de volta!</Text>

			<View style={{ width: "80%" }}>
				<TextInput
					label="E-mail"
					mode="outlined"
					outlineColor="#9DB1F3"
					activeOutlineColor="#9DB1F3"
					theme={{ colors: { primary: '#9DB1F3', onSurfaceVariant: '#9DB1F3' } }}
					style={local.input}
					onChangeText={setEmail}
					value={email}
				/>
				<TextInput
					label="Senha"
					mode="outlined"
					outlineColor="#9DB1F3"
					activeOutlineColor="#9DB1F3"
					theme={{ colors: { primary: '#9DB1F3', onSurfaceVariant: '#9DB1F3' } }}
					style={local.input}
					onChangeText={(text) => {
						setPassword(text);
						setError(null); // Limpa o erro ao digitar
					}}
					value={password}
					secureTextEntry
				/>
				{error && (
					<Text style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{error}</Text>
				)}
			</View>

			<View style={{ width: "80%", alignItems: "flex-end" }}>
				<TouchableOpacity onPress={() => router.push("/")}>
					<Text style={{ color: "#9DB1F3", fontWeight: "bold" }}>Esqueci minha senha</Text>
				</TouchableOpacity>
			</View>

			<View style={local.buttonContainer}>
				<TouchableOpacity style={local.button} onPress={handleLogin} disabled={loading} >
					<Text style={local.buttonText}>Entrar</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => router.push("/signin")}>
					<Text>Não tem uma conta?
						<Text style={{ color: '#AEA434', fontWeight: "bold" }} onPress={() => router.push("/signin")}> Cadastre-se</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView >
	)
}

const local = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
	},
	scrollViewContent: {
		flexGrow: 1,
		justifyContent: "center",
		paddingBottom: 20,
	},
	container: {
		flex: 1,
		alignItems: "center",
	},
	input: {
		width: "100%",
		backgroundColor: "transparent",
		marginBottom: 10,
		fontSize: 18,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		width: "60%",
		paddingBottom: 40,
	},
	button: {
		width: "100%",
		height: 50,
		backgroundColor: Colors.dark.green,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16,
	},
	buttonText: {
		fontSize: 18,
		color: Colors.dark.text,
		fontWeight: "bold",
	}
});
