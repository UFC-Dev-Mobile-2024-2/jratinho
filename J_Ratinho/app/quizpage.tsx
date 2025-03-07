import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Link } from "expo-router";
import { Button, FAB, Text } from "react-native-paper";

import ExerciceCard from "@/components/exercises/ExerciseCard";
import Instrument from "@/components/instruments/Instrument";
import InstrumentButton from "@/components/exercises/InstrumentButton";
import QuestionOption from "@/components/exercises/QuestionOption";
import ProgressButton from "@/components/exercises/ProgressButton";
import ExitDialog from "@/components/exercises/ExitDialog";
import PlayableInstrument from "@/components/instruments/PlayableInstrument";
import QuizImage from "@/components/exercises/QuizImage";
import { Colors } from "@/constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
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
          <Text variant="titleLarge" style={{ color: Colors.light.brown }}>
            Você sabe sobre a cidade?
          </Text>
          <Text variant="bodyMedium" style={{ marginTop: 10 }}>
            Descobrindo curiosidades sobre Canindé
          </Text>
        </View>

        <View style={styles.exerciseInfosContainer}>
          <QuizImage ImageSource="https://www.ceara.gov.br/wp-content/uploads/2022/07/20220701084811__MG_6302-scaled.jpeg" />
          <Text variant="titleLarge" style={{ color: Colors.light.brown }}>
            A estátua de São Francisco
          </Text>
          <Text
            variant="bodyMedium"
            style={{ marginTop: 10, textAlign: "center" }}
          >
            Em que ano foi inaugurada o Monumento de São Franscico na cidade de
            Canindé?
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          <QuestionOption OptionText="2000" OptionState="" />
          <QuestionOption OptionText="2001" OptionState="" />
          <QuestionOption OptionText="2002" OptionState="" />
          <QuestionOption OptionText="2003" OptionState="wrong" />
          <QuestionOption OptionText="2005" OptionState="right" />
          <QuestionOption OptionText="2006" OptionState="" />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <ProgressButton CorrectAnswer={true}></ProgressButton>
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
    // backgroundColor: 'green',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseInfosContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'purple'
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    // backgroundColor: 'blue'
  },
  bottomButtonContainer: {
    flex: 2,
    // backgroundColor: 'red',
    flexDirection: "column",
    justifyContent: "center",
  },
});