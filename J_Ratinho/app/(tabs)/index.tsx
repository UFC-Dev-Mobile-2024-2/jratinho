import {StyleSheet, View} from "react-native";
import {Text, Button, Card} from "react-native-paper";
import {Link} from "expo-router";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Index() {
    return (
        <View style={local.container}>
            <Text variant="headlineLarge">Bem vindo, aluno!</Text>
            <Text style={{marginBottom: 32}}variant="titleMedium">Vamos aprender e se divertir?</Text>
            <Card style={local.card}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title title="Praticar" subtitle="Descubra as notas!"/>
            </Card>
            <Card style={local.card}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title title="Quizzes" subtitle="Descubra as notas!"/>
            </Card>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        alignItems: "center",
    },
    card: {
        marginBottom: 8,
        width: "100%"
    }
});
