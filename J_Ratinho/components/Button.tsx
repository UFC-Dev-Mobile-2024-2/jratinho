import {StyleSheet, View, Pressable, Text} from "react-native";
import {Link} from "expo-router";

import {colors} from "@/constants/colors";
import {styles} from "@/constants/styles";

type Props = {
    label: string;
    color: string;
    route?: string;
    onPress?: () => void;
}

export default function Button({label, color, route, onPress}: Props) {
    /*
     * se tem rota retorna link senão texto
     * útil caso botão sirva só para acionar algo
     */

    const content = route ? (
        <Link style={[styles.label, local.label]} href={route}>
            {label}
        </Link>
    ) : (
        <Text style={[styles.label, local.label]}>
            {label}
        </Text>
    );

    return (
        <View style={local.container}>
            <Pressable style={[local.button, {backgroundColor: colors.dark[color]}]}>
                {content}
            </Pressable>
        </View>
    );
}

const local = StyleSheet.create({
    container: {
        width: 256,
        height: 32,
        margin: 8,
    },
    button: {
        borderRadius: 16,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        color: colors.light.white,
    }
});
