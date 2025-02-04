import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { PaperProvider, Card } from "react-native-paper";

export default function NewsCard() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Card>
            {" "}
            style={{ margin: 20 }}
            <Card.Title tittle="aqui vai ter uma props" />
            <Card.Content>
              <Text>Props do conteudo da noticia é aqui</Text>
            </Card.Content>
          </Card>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
