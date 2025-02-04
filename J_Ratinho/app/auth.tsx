import {StyleSheet, View, Platform, Text} from "react-native";

import Button from "@/components/Button";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Auth() {
    return (
        <View style={local.container}>
            <Text style={[styles.h1, local.h1]}>
                Seja bem vindo ao aplicativo J. Ratinho!
            </Text>
            <Button label="Cadastre-se agora!" color="yellow" route="/"/>
            <Button label="Já tenho uma conta" color="green" route="/"/>
        </View>
    );
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        alignItems: "center",
    },
    h1: {
        textAlign: "center",
        color: colors.white,
        marginTop: 96,
        marginBottom: 32,
    }
});
