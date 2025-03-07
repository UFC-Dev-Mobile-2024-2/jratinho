import React from "react";
import { View, StyleSheet, Image, StatusBar, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useRouter } from "expo-router";

import { Colors } from "@/constants/Colors";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<View style={local.container}>
			<StatusBar barStyle="dark-content" />

			<View style={local.topSection}>
				<Image style={local.illustration} />
			</View>

			<View style={local.content}>
				<Text style={local.h1}>Seja bem-vindo!</Text>
				<Text style={local.h3}>
					Aqui você se diverte aprendendo seus primeiros acordes e conhecendo a história de Canindé.
				</Text>

				<View style={local.buttonContainer}>
					<TouchableOpacity style={button.primary} onPress={() => router.push("/signin")}>
						<Text style={button.primaryText}>Começar agora</Text>
					</TouchableOpacity>

					<TouchableOpacity style={button.secondary} onPress={() => router.push("/login")}>
						<Text style={button.secondaryText}>Já tenho uma conta</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
};

const local = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.cian,
	},
	topSection: {
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 60,
	},
	illustration: {
		width: 200,
		height: 250,
		resizeMode: "contain",
	},
	content: {
		flex: 1,
		alignItems: "center",
		marginTop: 50,
		justifyContent: "center",
		paddingHorizontal: 16,
	},
	buttonContainer: {
		marginTop: 40,
		width: "100%",
		alignItems: "center",
		gap: 10,
	},
	h1: {
		fontSize: 32,
		fontWeight: "bold",
		color: Colors.light.text,
		textAlign: "center",
		marginBottom: 25,
	},
	h3: {
		fontSize: 20,
		color: Colors.light.text,
		textAlign: "center",
		marginBottom: 40,
		lineHeight: 24,
		fontWeight: "400",
		maxWidth: "80%",
	},
});

const button = StyleSheet.create({
	primary: {
		width: 212,
		height: 50,
		backgroundColor: Colors.dark.green,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	primaryText: {
		fontSize: 18,
		color: Colors.dark.text,
		fontWeight: "bold",
	},
	secondary: {
		width: 212,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	secondaryText: {
		fontSize: 18,
		color: Colors.light.text,
		fontWeight: "400",
	},
});