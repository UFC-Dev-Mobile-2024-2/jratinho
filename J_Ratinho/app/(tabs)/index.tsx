import React from "react";
import { StyleSheet, View, Text, Platform, Button, Alert, TouchableOpacity } from "react-native";
import About from "@/pages/About";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  const onPress = () => {
    Alert.alert('Button pressed');
  };

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
