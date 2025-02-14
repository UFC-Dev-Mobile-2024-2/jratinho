import {Slot, Stack} from "expo-router";
import {useColorScheme, View} from "react-native";
import {MD3DarkTheme, MD3LightTheme, PaperProvider, Appbar} from "react-native-paper";

import {colors} from "@/constants/colors";

const dark = {...MD3DarkTheme, colors: colors.dark};
const light = {...MD3LightTheme, colors: colors.light};

export default function RootLayout() {
    return (
        <PaperProvider theme={light}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </PaperProvider>
    )
}
