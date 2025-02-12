import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { cardsData, newsContentData } from "../assets/data/data";

export default function NewsInfo() {
    const route = useRoute();
    const { id } = route.params;

    const card = cardsData.find((item) => item.id === id);
    const content = newsContentData.find((item) => item.id === id);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.content}>{content?.content}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});