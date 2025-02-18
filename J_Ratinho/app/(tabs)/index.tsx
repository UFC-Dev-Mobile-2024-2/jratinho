import {StyleSheet, View, Image} from "react-native";
import {Text, Button, Card, Avatar} from "react-native-paper";
import {Link} from "expo-router";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Index() {
    return (
        <View style={local.container}>
            <View style={local.header}>
                <Image style={styles.marca} source={require("@/assets/images/marca.svg")} resizeMode="contain"/>
                <Link style={local.profile} href="/profile">
                    <Avatar.Image  size={40} source={require("@/assets/images/rato.png")}/>
                </Link>
            </View>
            <Text variant="headlineLarge">Bem vindo, aluno!</Text>
            <Text style={{marginBottom: 32}}variant="titleMedium">Vamos aprender e se divertir?</Text>
            <Card style={local.card}>
                <Card.Cover style={{backgroundColor: "#9DB1F3"}}/>
                <Card.Title title="Praticar" subtitle="Descubra as notas!"/>
            </Card>
            <Card style={local.card}>
                <Card.Cover style={{backgroundColor: "#FB8B38"}}/>
                <Card.Title title="Quizzes" subtitle="Descubra as notas!"/>
            </Card>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: "center",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    card: {
        marginBottom: 8,
        width: "100%"
    },
    profile: {
        position: "absolute",
        right: -128
    }
});
