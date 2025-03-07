import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, PaperProvider } from "react-native-paper";
import { useRouter } from "expo-router";

import { exerciseData } from "@/fakedb/exerciseData";

export default function QuizPage() {
    const router = useRouter();
    
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);

    const currentQuestion = exerciseData.questions[questionIndex];

    const handleAnswer = (id: string) => {
        if (selectedAnswer !== null) return;

        const selectedOption = currentQuestion.attributes.options.find(option => option.id === id);
        if (selectedOption) {
            setSelectedAnswer(id);
            setCorrectAnswer(selectedOption.correct);
        }
    };

    const proceedPage = () => {
        if (questionIndex < exerciseData.questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer(null);
            setCorrectAnswer(null);
        } else {
            router.push("/completedexercise");
        }
    };

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text variant="titleLarge" style={styles.questionText}>
                    {currentQuestion.attributes.question}
                </Text>
                
                <View style={styles.optionsContainer}>
                    {currentQuestion.attributes.options.map((option) => (
                        <Button
                            key={option.id}
                            mode="contained"
                            style={[
                                styles.optionButton,
                                selectedAnswer === option.id
                                    ? option.correct
                                        ? styles.correctAnswer
                                        : styles.wrongAnswer
                                    : null
                            ]}
                            onPress={() => handleAnswer(option.id)}
                            disabled={selectedAnswer !== null}
                        >
                            {option.text}
                        </Button>
                    ))}
                </View>

                {correctAnswer !== null && (
                    <Button mode="contained" onPress={proceedPage} style={styles.nextButton}>
                        {questionIndex < exerciseData.questions.length - 1 ? "Próxima questão" : "Finalizar"}
                    </Button>
                )}
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ecf0f1",
    },
    questionText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    optionsContainer: {
        width: "100%",
        alignItems: "center",
    },
    optionButton: {
        marginVertical: 5,
        width: "80%",
    },
    correctAnswer: {
        backgroundColor: "green",
    },
    wrongAnswer: {
        backgroundColor: "red",
    },
    nextButton: {
        marginTop: 20,
        backgroundColor: "#007bff",
    },
});

