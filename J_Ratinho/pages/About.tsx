import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";

const About = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <AntDesign name="arrowleft" size={24} color="white" />
      <Text style={styles.meio}>Sobre Nós</Text>
    </View>
    <View>Body</View>
    <View style={styles.navigation}>
      <Text style={styles.icon}>
        <Feather name="list" size={24} color="white" /> Início
      </Text>
      <Text style={styles.icon}>
        <Fontisto name="smiley" size={24} color="white" />
        Doe!
      </Text>
      <Text style={styles.icon}>
        <FontAwesome5 name="users" size={24} color="white" />
        Sobre Nós
      </Text>
      <Text style={styles.icon}>
        <Feather name="bell" size={24} color="white" />
        Notícias
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#5087CA",
    width: "100%",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  meio: {
    width: "100%",
    color: "white",
    fontSize: 22,
    fontFamily: "roboto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  navigation: {
    backgroundColor: "#2C59EF",
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export default About;
