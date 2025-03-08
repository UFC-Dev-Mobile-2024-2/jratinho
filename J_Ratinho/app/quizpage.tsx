
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { FAB, Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import { useRouter } from "expo-router";
import { Quiz } from '@/@types/declarations';
import axios from 'axios';

import ExerciceCard from "@/components/exercises/ExerciseCard";
import InstrumentButton from "@/components/exercises/InstrumentButton";
import QuizOption from "@/components/exercises/QuizOption";
import ProgressButton from "@/components/exercises/ProgressButton";
import ExitDialog from "@/components/exercises/ExitDialog";
import QuizImage from "@/components/exercises/QuizImage";
import { Colors } from "@/constants/Colors";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const token = 'dd40d5c313a14a7c10586fef30dd3a33de92666981e04be9a17c7b4b34ef9b0e8cb913e30cad5a504b5df838cc340e7df04e447e24cf11bbd91809cfc3eeb6e580580b526e8bf2017caceb2d801a4313dfc260b78461714a1ff40609fab244b32f630d45bbed44affafdb41769e84079558cf700d83a84c320a91d63515fa6bc'
export default function QuizPage() {
    const [quizes, setQuizes] = useState<Quiz[]>([]);
    const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState(true);
    const getRandomQuiz = (questions: Quiz[]) => {
        if (questions.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    };
    useEffect(() => {
      axios
          .get('https://stable-paradise-c922bed35a.strapiapp.com/api/exercicios?populate=*', {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          })
          .then(response => {
              const loadedQuiz = response.data.data;
              const filteredQuiz = loadedQuiz.filter((exerciseData: any) => exerciseData.topic.split(':')[0] === 'quiz');
              setQuizes(filteredQuiz);
              setLoading(false);
              const randomQuiz = getRandomQuiz(filteredQuiz);
              setCurrentQuiz(randomQuiz);
          })
          .catch(error => {
              console.error('Error fetching questions:', error.response ? error.response.data : error.message);
              setLoading(false);
          });
  }, []);
    
    //exit dialog
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const handleExit = () => {
        console.log("exiting");
        setVisible(false);
        resetExercise();
        router.push("/home");
    };

    const proceedPage = () => {
        console.log("proceeding");
        setVisible(false);
        resetExercise();
        router.push({
          pathname: '/completedexercise',
          params: { nextRoute: '/quizpage' }, 
        });
    };

    const resetExercise = () => {
        setSelectedAnswer(null);
        setCorrectAnswer(null);
    };

    useEffect(() => {
        return () => resetExercise();
    }, [router]);

    //exercise progress
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);

    const handleAnswer = (id: string) => {

      if (selectedAnswer !== null) return;
  
      const selectedOption = currentQuiz?.option.find(option => option.id === id);
      if (selectedOption) {
          setSelectedAnswer(id); 
          setCorrectAnswer(selectedOption.correct ? true : false); 
      }
  };

    //loading or no questions
    if (loading) {
        return (
            <View style={styles.container}>
                <Text variant="titleLarge">Carregando...</Text>
            </View>
        );
    }

    if (!currentQuiz) {
        return (
            <View style={styles.container}>
                <Text variant="titleLarge" style={styles.errorText}>
                    Não foi possível carregar o exercício.
                </Text>
            </View>
        );
    }
  

  return (
    <View style={styles.container}>
      <PaperProvider>
        <View style={styles.topButtonContainer}>
          <FAB icon="close" size="small" style={styles.fab} onPress={() => setVisible(!visible)} />
        </View>

        <View style={styles.centralContentContainer}>
          <View style={styles.exerciseInfosContainer}>
            <Text variant="titleLarge" style={{ color: Colors.light.brown }}>
              Você sabe sobre a cidade?
            </Text>
            <Text variant="bodyMedium" style={{ marginTop: 10, color: "black" }}>
              Descobrindo curiosidades sobre Canindé
            </Text>
          </View>

          <View style={styles.exerciseInfosContainer}>
          <Image
              source={{ uri: `${currentQuiz?.image?.url}`|| 'https://via.placeholder.com/200' }}
              style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10, borderColor: Colors.light.brown, borderWidth: 10 }}
              accessibilityLabel={currentQuiz?.topic.split(':')[1] || "Imagem relacionada ao quiz."}
            />

            <Text variant="titleLarge" style={{ color: Colors.light.brown }}>
              {currentQuiz?.subtitle}
            </Text>
            <Text variant="bodyMedium" style={{ marginTop: 10, textAlign: "center", color: "black"}}>
              {currentQuiz?.question}
            </Text>
          </View>

          <View style={styles.optionsContainer}>
          {currentQuiz?.option && currentQuiz.option.map((option) => (
            <QuizOption
              key={option.id}
              OptionText={option.text}
              OptionState={selectedAnswer === option.id ? (correctAnswer ? "right" : "wrong") : ""}
              onPress={() => handleAnswer(option.id)} // Passando o id da opção
            />
          ))}
      </View>
        </View>

        <View style={styles.bottomButtonContainer}>
          {correctAnswer !== null && <ProgressButton CorrectAnswer={correctAnswer} onPress={correctAnswer ? proceedPage : handleExit} />}
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)} style={styles.dialog}>
            <Dialog.Title><Text style={{ color: Colors.dark.green }}>Sair do exercício?</Text></Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium" style={styles.dialogText}>
                Ao sair do exercício, você perderá seu progresso!
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={handleExit} textColor="darkgray">Sair</Button>
              <Button buttonColor={Colors.dark.green} onPress={() => setVisible(false)} textColor="white">Permanecer</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </PaperProvider>
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
  },
  centralContentContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseInfosContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  bottomButtonContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },

  dialog: {
    backgroundColor: 'white',
  },
  dialogText: {
    color: 'black',
  },
  fab: {
    backgroundColor: Colors.dark.green,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
},
});
