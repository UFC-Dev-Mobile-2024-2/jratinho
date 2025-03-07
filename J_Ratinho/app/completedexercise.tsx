import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import {useRouter} from "expo-router";
import { Button, FAB, Text } from "react-native-paper";

import ExitDialog from "@/components/exercises/ExitDialog";
import { Colors } from "@/constants/Colors";



export default function CompletedExercise() {

  const router = useRouter();

  const handleExit = () => {
    console.log("exiting");
    router.push("/(tabs)");
  };

  const proceedPage = () => {
    console.log("proceeding");
    router.push("/exercisepage");
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.dark.green }]}>
      <View style={styles.topButtonContainer}>
        <ExitDialog
          ConfirmOption="Continuar"
          DismissOption="Sair"
          AccentColor={Colors.dark.green}
          TextColor="#ffffff"
          DialogTitle="Tem certeza?"
          DialogText="Você deseja realmente sair?"
          onDismiss={() => console.log("Dialog dismissed")}
        />
         
      </View>

      <View style={styles.centralContentContainer}>
        <View style={styles.exerciseInfosContainer}>
          <Text variant="titleLarge" style={{ color: "white" }}>
            Parabéns!
          </Text>
          <Text variant="bodyMedium" style={{ marginTop: 10, color: "white" }}>
            Seu esforço vale a pena, continue sempre aprendendo!
          </Text>
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        
        <Button buttonColor="white" textColor={Colors.dark.green} labelStyle={{ fontSize: 16, fontWeight: "bold" }} onPress={() => {proceedPage()}}>Próximo exercício</Button>

        <Button textColor="white" mode="text" onPress={() => {handleExit()}}>Parar por agora</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  topButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    // backgroundColor: 'yellow'
  },
  centralContentContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  exerciseInfosContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'purple'
  },
  bottomButtonContainer: {
    flex: 2,
    // backgroundColor: 'red',
    flexDirection: "column",
    justifyContent: "center",
  },
});
