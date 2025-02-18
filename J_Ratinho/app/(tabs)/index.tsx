import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import About from "@/pages/About";

export default function App() {
  return (
    <View style={styles.container}>
      
      <About />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
