import React from "react";
import { Slot, Stack } from "expo-router";
import { useColorScheme, View } from "react-native";
import {
	MD3DarkTheme,
	MD3LightTheme,
	PaperProvider,
	Appbar,
} from "react-native-paper";
import { Colors } from "@/constants/Colors";

const dark = { ...MD3DarkTheme, colors: Colors.dark };
const light = { ...MD3LightTheme, colors: Colors.light };

export default function RootLayout() {
	return (
		<PaperProvider theme={light}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="login" options={{ headerShown: false }} />
				<Stack.Screen name="signin" options={{ headerShown: false }} />
				<Stack.Screen name="auth" options={{ headerShown: false }} />

				<Stack.Screen name="profile" />
				<Stack.Screen name="+not-found" />
			</Stack>
		</PaperProvider>
	);
}
