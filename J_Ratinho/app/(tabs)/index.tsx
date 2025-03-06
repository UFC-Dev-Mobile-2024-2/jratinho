import React from 'react';
import {StyleSheet, View, Image,} from "react-native";
import {Text, Button, Card, Avatar} from "react-native-paper";
import {Link} from "expo-router";
import {styles} from "@/constants/styles";
import {Colors} from "@/constants/Colors";

import ExerciceCard from '@/components/exercises/ExerciseCard';

export default function Index() {
    return (
        <View style={local.container}>
            <View style={local.header}>
                <Link style={local.profile} href="/profile">
                    <Avatar.Image  size={40} source={require("@/assets/images/rato.png")}/>
                </Link>
            </View>
            <Text variant="headlineLarge">Bem vindo, aluno!</Text>
            <Text style={{marginBottom: 32}}variant="titleMedium">Vamos aprender e se divertir?</Text>
            
            <Link href='/exercisepage'>
                <ExerciceCard InstrumentVariant='saxofone' InstrumentSize={200} InstrumentRotation='-30deg' MainColor={Colors.dark.orange} CoverColor={Colors.light.orange} TextColor='#ffffff'>
                </ExerciceCard>
            </Link>

            <Link href='/quizpage'>
                <ExerciceCard InstrumentVariant='saxofone' InstrumentSize={200} InstrumentRotation='-30deg' MainColor={Colors.dark.orange} CoverColor={Colors.light.orange} TextColor='#ffffff'>
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
