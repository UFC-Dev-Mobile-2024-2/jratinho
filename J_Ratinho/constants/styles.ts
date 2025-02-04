import {StyleSheet} from "react-native";
import {colors} from "@/constants/colors";

export const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 24
    },
    p: {
        fontsize: 16
    },
    label: {
        fontSize: 16
    },
    marca: {
        width: 128
    },
    input: {
        height: 32,
        width: 256,
        margin: 8,
        borderWidth: 2,
        borderRadius: 16,
        padding: 10,
        borderColor: colors.dark.blue
    },
});
