import React from "react";
import { ScrollView } from "react-native";
import NewsCard from "./NewsCard";
import { cardsData } from "@/assets/data/data";
import { PaperProvider } from "react-native-paper";

export default function CardList({ navigation }) {
    return (
        <PaperProvider>
            <ScrollView>
                {cardsData.map((card) => (
                    <NewsCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        subtitle={card.subtitle}
                        coverImage={card.coverImage}
                        onPress={() => navigation.navigate("NewsInfo", { id: card.id })}
                    />
                ))}
            </ScrollView>
        </PaperProvider>
    );
}