import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import React from 'react';


export default function SplashScreen() {
	const router = useRouter();
	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/home');
		}, 2000);

		return () => clearTimeout(timer);
	}, [router]);

	return (
		<View style={{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			paddingHorizontal: 20,
			backgroundColor: "#9DB1F3"
		}}>
			<Text style={{ fontSize: 32, color: "#ECEDEE", maxWidth: "80%", textAlign: "center", marginBottom: 20 }}>
				Montando os instrumentos...
			</Text>

			<ActivityIndicator size="large" color="#ECEDEE" />
		</View>
	);
}
