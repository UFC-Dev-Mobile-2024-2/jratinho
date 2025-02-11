import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    ScrollView
} from "react-native";
import NewsCard from "./NewsCard";

const cardsData = [
    {
        id: 1,
        title: "Título 1",
        subtitle: "Subtítulo 1",
        coverImage: "https://picsum.photos/id/558/700/700"
    },
    {
        id: 2,
        title: "Título 2",
        subtitle: "Subtítulo 2",
        coverImage: "https://picsum.photos/id/559/700/699",
    }

]

export default function CardList() {
    return (
        <ScrollView>
            {cardsData.map((card) => (
                <NewsCard
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                coverImage={card.coverImage}
            />
            ))}
        </ScrollView>
    );
}