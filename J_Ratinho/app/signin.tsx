import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";

import { Colors } from "@/constants/Colors";
import { styles } from '@/constants/styles';

export default function SigninScreen() {
	const router = useRouter();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<KeyboardAvoidingView
			style={local.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View style={local.header}>
				<Image style={styles.marca} source={require("@/assets/images/marca.png")} resizeMode="contain" />
			</View>
			<Text style={{ marginBottom: 32, color: '#9DB1F3' }} variant="headlineLarge">Crie sua conta</Text>

			<View style={{ width: "80%" }}>
				<TextInput
					label="Nome"
					mode="outlined"
					outlineColor="#9DB1F3"
					activeOutlineColor="#9DB1F3"
					theme={{ colors: { primary: '#9DB1F3', onSurfaceVariant: '#9DB1F3' } }}
					style={local.input}
					onChangeText={setName}
					value={name}
				/>
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
					onChangeText={setPassword}
					value={password}
					secureTextEntry
				/>
			</View>

			<View style={{ width: "80%", alignItems: "flex-start" }}>
				<TouchableOpacity onPress={() => router.push("/")}>
					<Text style={{ color: "#11181C" }}>Sua senha deve conter pelo menos 8 caracteres, incluindo letras e números.</Text>
				</TouchableOpacity>
			</View>

			<View style={local.buttonContainer}>
				<TouchableOpacity style={local.button} onPress={() => router.push("/auth")}>
					<Text style={local.buttonText}>Criar conta</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text>Já tem uma conta?
						<Text style={{ color: '#AEA434', fontWeight: "bold" }} onPress={() => router.push("/login")}> Faça seu login</Text>
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
