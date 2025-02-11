import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
} from "react-native";
import { PaperProvider, Card,Avatar } from "react-native-paper";

export default function NewsCard() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Card style={styles.card}>
            <Card.Title  title="aqui vai ter uma props" 
            right={(props) => <Avatar.Icon {...props} icon="go" />}
            />
            <Card.Content>
              <Text>Props do conteúdo da notícia é aqui</Text>
            </Card.Content>
          </Card>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#6F6F6F",
    margin: 20,
  }

});
