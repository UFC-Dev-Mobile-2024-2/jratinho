import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardSobre from '@/components/sobre/CardSobre';

function ViewBoxesWithColorAndText() {
  const onPress = () => {
    Alert.alert("Button pressed");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Text style={styles.text}>Bem-Vindo, aluno</Text>
          <Text style={styles.text}>
          Vamos aprender e se divertir?
          </Text>

          <View>
            <CardSobre cardTitle="O aplicativo" cardParagraph="O propósito do nosso aplicativo" /> 
            <CardSobre cardTitle="O Mascote" cardParagraph="Processo e significado do nosso mascote Ratinho" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Sobre nós</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  
  container: {
    backgroundColor: "#9DB1F3",
    flex: 1,
  },
  CardSobre: {
    fontSize: 11,
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
    color: "white",
    marginTop: 50,
  },
  image_container: {
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#87a224",
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default ViewBoxesWithColorAndText;
