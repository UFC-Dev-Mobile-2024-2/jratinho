import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const About = () => {
  const navigation = useNavigation();

  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Que tal conhecer mais?</Text>
      <Text>
        O Aplicativo é uma iniciativa da Fundação {"\n"}
        Maestro J Ratinho com o intuito de ensinar {"\n"}
        música.
      </Text>
      <TouchableOpacity style={styles.corpo} onPress={handlePress}>
        <Text>
          <Text style={styles.titulobold}>O Mascote{"\n"}</Text>
          Aceitamos instrumentos, alimentos, mobílias, toda ajuda é bem vinda!
          Detalhes do endereço.
        </Text>
        <Image
          source={require("./../../assets/images/j-ponto.png")}
          style={styles.imagem}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.corpo} onPress={handlePress}>
        <Text>
          <Text style={styles.titulobold}>O Mascote{"\n"}</Text>
          Aceitamos instrumentos, alimentos, mobílias, toda ajuda é bem vinda!
          Detalhes do endereço.
        </Text>
        <Image
          source={require("./../../assets/images/ratinho.png")}
          style={styles.imagem}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 48,
  },
  titulo: {
    fontSize: 20,
    color: "#af7a5d",
    textAlign: "center",
    padding: 10,
  },
  corpo: {
    fontSize: 15,
    padding: 10,
    textAlign: "left",
    borderWidth: 1,
    borderColor: "#CAC4D0",
    borderStyle: "solid",
    borderRadius: 12,
    margin: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  titulobold: {
    fontWeight: "bold",
  },
  imagem: {
    width: 65,
    height: 93,
    marginLeft: 10,
  },
});

export default About;
