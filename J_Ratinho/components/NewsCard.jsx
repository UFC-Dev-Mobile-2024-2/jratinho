import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  Image,
  ScrollView
} from "react-native";
import { PaperProvider, Card,Avatar } from "react-native-paper";



export default function NewsCard({title, subtitle, coverImage}) {
  return (
    <PaperProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Card style={{ margin: 20, backgroundColor: '#5087ca' }}>
        <Card.Cover
            style={{  borderRadius: 15 }}
            source={{uri : coverImage}}
          />

          <Card.Title
            title={title}
            subtitle={subtitle}
            titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
            subtitleStyle={{ fontSize: 14 }}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
});
