import React, { useEffect, useState } from "react";
import {StyleSheet, View, Image} from "react-native";
import {Text, Button, Card, Avatar} from "react-native-paper";
import {Link} from "expo-router";
import {styles} from "@/constants/styles";
import {Colors} from "@/constants/Colors";
import ExerciceCard from '@/components/exercises/ExerciseCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from "@/components/logos/Logos";

export default function Index() {
    const [user, setUser] = useState<{ username?: string }>({});
    //agora eu vou usar o async storage para pegar o nome do usuário, o localhost n funciona em apk
    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("user");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error(error);
            }
        };
        loadUser();
    }, []);
        

    return (
        <View style={local.container}>
            <View style={local.header}>
                {/* <Logo LogoVariant="colored" LogoWidth={100}/> */}
                <Link style={local.profile} href="/profile">
                    <Avatar.Image  size={40} source={require("@/assets/images/rato.png")}/>
                </Link>
            </View>
            <Text variant="headlineLarge">Bem vindo, {user.username}!</Text>
            <Text style={{marginBottom: 32, color:Colors.dark.brown}}variant="titleMedium">Vamos aprender e se divertir?</Text>

            <Link href='/quizpage' style={local.link}>
                <ExerciceCard CardTitle="Quizes" CardContent="Descubra Canindé!" InstrumentVariant='tuba' InstrumentSize={200} InstrumentRotation='-30deg' MainColor={Colors.dark.orange} CoverColor={Colors.light.orange} TextColor='#ffffff'>
                </ExerciceCard>
            </Link>
            <Link href='/exercisepage' style={local.link}>
                <ExerciceCard CardTitle="Praticar" CardContent="Descubra os timbres!" InstrumentVariant='saxophone' InstrumentSize={200} InstrumentRotation='-30deg' MainColor={Colors.dark.cian} CoverColor={Colors.light.cian} TextColor='#ffffff'>
                </ExerciceCard>
            </Link>
            <Link href='/playinginstrument' style={local.link}>
                <ExerciceCard CardTitle="Teste instrumentos" CardContent="Experimente!" InstrumentVariant='clarinet' InstrumentSize={150} InstrumentRotation='-30deg' MainColor={Colors.dark.brown} CoverColor={Colors.light.brown} TextColor='#ffffff'>
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
        paddingTop: 32,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginBottom: 30,
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
    }, 
    link: {
        width: "100%",
        marginBottom: 16,
    }
});
