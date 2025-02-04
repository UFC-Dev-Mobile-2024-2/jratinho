import {StyleSheet, View, Platform, Text, Image} from "react-native";

import Button from "@/components/Button";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Auth() {
    return (
        <View style={local.container}>
            <Image style={styles.marca} source={require("@/assets/images/marca.svg")} resizeMode="contain"/>
            <Text style={[styles.h1, local.h1]}>
                Seja bem vindo ao aplicativo J. Ratinho!
            </Text>
            <Button label="Cadastre-se agora!" color="yellow" route="/signin"/>
            <Button label="Já tenho uma conta" color="green" route="/login"/>
        </View>
    );
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light.blue,
        alignItems: "center",
    },
    h1: {
        maxWidth: 320,
        textAlign: "center",
        color: colors.light.white,
        marginBottom: 32,
    },
});
