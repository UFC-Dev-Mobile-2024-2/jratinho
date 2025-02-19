import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
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
            <Text>{content?.data}</Text>
            <Text style={styles.content}>{content?.content}</Text>
            <Image source={{ uri: card.coverImage }} style={styles.coverImage} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,       
        
    },
    title: {
        fontSize: 28,
        marginBottom: 6,
        fontFamily: 'Capriola-Regular.ttf',
        color: '#865033', 
    },
    content: {
        paddingTop: 20,
        fontSize: 16,
        lineHeight: 24,
    },
    coverImage: {
        width: '100%',
        height: 200, 
        marginVertical: 16,
        borderRadius: 6,
        marginTop: 40
    },
});