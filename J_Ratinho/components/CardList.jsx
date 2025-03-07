import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PaperProvider } from "react-native-paper";
import NewsCard from "./NewsCard";

// Update the prop types to include newsData and loading
export default function CardList({
  navigation,
  newsData = [],
  loading = false,
}) {
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#5087ca" />
        <Text style={styles.loadingText}>Carregando notícias...</Text>
      </View>
    );
  }

  if (!newsData || newsData.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Nenhuma notícia disponível no momento.
        </Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <ScrollView>
        {newsData.map((news) => (
          <NewsCard
            key={news.documentId}
            id={news.documentId}
            title={news.title}
            subtitle={
              news.content.substring(0, 100) +
              (news.content.length > 100 ? "..." : "")
            }
            coverImage={
              news.documentId
                ? `https://jratinho.onrender.com${news.coverImage[0].url}`
                : null
            }
            publicationDate={news.publicationDate}
            onPress={() =>
              navigation.navigate("NewsInfo", { id: news.documentId })
            }
          />
        ))}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#5087ca",
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
