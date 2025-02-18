import {StyleSheet, View, Text} from "react-native";
import {Stack} from "expo-router";

export default function Profile() {
    return (
        <View>
            <Stack.Screen options={{title: "Perfil"}} />
            <Text>Perfil</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
