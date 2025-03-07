import React, { useEffect, useState } from "react";
import {StyleSheet, View, Image} from "react-native";
import {Text, Button, Card, Avatar} from "react-native-paper";
import {Link} from "expo-router";
import {styles} from "@/constants/styles";
import {Colors} from "@/constants/Colors";
import ExerciceCard from '@/components/exercises/ExerciseCard';

export default function Index() {
    const [user, setUser] = useState<{ username?: string}>({});
//essa parte do código eu fiz apenas para trocar o nome usuario generico para o nome armazenado no localhost salvo no navegador, não é o ideal mas pra ficar mais ok.
    useEffect(() => {
        try {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        }
    } catch(error) {
        console.error("erro ao carregar nome", error);
    }
    }, []);

    return (
        <View style={local.container}>
            <View style={local.header}>
                <Link style={local.profile} href="/profile">
                    <Avatar.Image  size={40} source={require("@/assets/images/rato.png")}/>
                </Link>
            </View>
            <Text variant="headlineLarge">Bem vindo, {user.username}!</Text>
            <Text style={{marginBottom: 32}}variant="titleMedium">Vamos aprender e se divertir?</Text>

            <Link href='/quizpage'>
                <ExerciceCard InstrumentVariant='saxophone' InstrumentSize={200} InstrumentRotation='-30deg' MainColor={Colors.dark.orange} CoverColor={Colors.light.orange} TextColor='#ffffff'>
                </ExerciceCard>
            </Link>
            <Link href='/exercisepage'>
                <ExerciceCard InstrumentVariant='saxophone' InstrumentSize={200} InstrumentRotation='-30deg' MainColor={Colors.dark.orange} CoverColor={Colors.light.orange} TextColor='#ffffff'>
                </ExerciceCard>
            </Link>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        
    },
    header: {
        paddingTop: 32,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginBottom: -18,
    },
    card: {
        marginTop: 16,
        marginBottom: 16,
        width: "100%",
        alignItems: "center",
    },
    profile: {
        position: "absolute",
        marginTop: 9,
        right: 0,
    }
});
