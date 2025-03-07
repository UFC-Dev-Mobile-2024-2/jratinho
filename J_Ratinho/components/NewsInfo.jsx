import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import api from "../services/api";

export default function NewsInfo() {
  const route = useRoute();
  const { id } = route.params;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/noticias/${id}?populate=*`);
        console.log("News details received:", response.data);
        setNewsItem(response.data.data);
      } catch (error) {
        console.error("Error fetching news details:", error);
        setError("Failed to load news details");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#5087ca" />
        <Text style={styles.loadingText}>Carregando notícia...</Text>
      </View>
    );
  }

  if (error || !newsItem) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          {error || "Notícia não encontrada"}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.date}>
        Publicado em:{" "}
        {new Date(newsItem.publicationDate).toLocaleDateString("pt-BR")}
      </Text>
      <Text style={styles.content}>{newsItem.content}</Text>
      {newsItem.documentId && (
        <Image
          source={{
            uri: newsItem.documentId
              ? `https://jratinho.onrender.com${newsItem.coverImage[0].url}`
              : null,
          }}
          style={styles.coverImage}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#5087ca",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 6,
    fontFamily: "Capriola-Regular.ttf",
    color: "#865033",
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  content: {
    paddingTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  coverImage: {
    width: "100%",
    height: 200,
    marginVertical: 16,
    borderRadius: 6,
    marginTop: 40,
  },
});
