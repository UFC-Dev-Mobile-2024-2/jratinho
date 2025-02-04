import {StyleSheet, View, Text, Platform} from "react-native";
import {Link} from "expo-router";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

export default function Index() {
    /* temporário: trocar pela home do aplicativo i.e. onde ficam jogos etc. */

    return (
        <View style={local.container}>
            <Text style={[styles.h1, {marginBottom: 16}]}>Rotas</Text>
            <Link href="/auth">Autenticação</Link>
        </View>
    )
}

const local = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
});
