import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {useRouter} from "expo-router";
import { FAB, Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import axios from 'axios';

import { Question } from '@/@types/declarations';
import InstrumentButton from '@/components/exercises/InstrumentButton';
import ProgressButton from '@/components/exercises/ProgressButton';
import { Colors } from '@/constants/Colors';

import { exerciseData } from "@/fakedb/exerciseData";
import { playInstrument } from "@/services/playInstrument";

const token = 'c3f92ce5b43c5aa5489e86971ffb6be5c97cb32fa61e21fa42b93335f8132f0ccf3bc28aab9a67fd5bf11ccf4a139a7ed0b76c132b754857085572a1ed351154c6161c05e054e46dbeca80fc6eb7d33e33b8c82a4f24f7aa5c4967fe18c1ac3bd06d162ddf3b171c526f5d4aca32931ae0fdc3df8a169fb4647319ffd8294913'

export default function Exercisepage() {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [loading, setLoading] = useState(true);
    const getRandomQuestion = (questions: Question[]) => {
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
                    const loadedQuestions = response.data.data;
                    setQuestions(loadedQuestions);
                    setLoading(false);
                    const randomQuestion = getRandomQuestion(loadedQuestions);
                    setCurrentQuestion(randomQuestion);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }, []);
    
    //exit dialog
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const handleExit = () => {
        console.log("exiting");
        setIsPlaying(false);
        setVisible(false);
        resetExercise();
        router.push("/home");
    };

    const proceedPage = () => {
        console.log("proceeding");
        setIsPlaying(false);
        setVisible(false);
        resetExercise();
        router.push("/completedexercise");
    };

    const resetExercise = () => {
        setIsPlaying(false);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
    };

    useEffect(() => {
        return () => resetExercise();
    }, [router]);


    //sound player
    const [isPlaying, setIsPlaying] = useState(false);
 

    function setInstrument(){
        setIsPlaying(!isPlaying);
        isPlaying ? playInstrument(currentQuestion?.topic) : playInstrument(currentQuestion?.topic);
    }
    //exercise progress
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);

    const handleAnswer = (id: string) => {
        if (selectedAnswer !== null) return; 
        const selectedOption = currentQuestion?.option.find(option => option.id === id);
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

    if (!currentQuestion) {
        return (
            <View style={styles.container}>
                <Text variant="titleLarge" style={styles.errorText}>
                    Não foi possível carregar o exercício.
                </Text>
            </View>
        );
    }
    
    //

    
    return (       
    <View style={styles.container}>
        <PaperProvider>
            <View style={styles.topButtonContainer}>
                <FAB icon="close" size="small" style={styles.fab} onPress={() => setVisible(!visible)}/>
            </View>

            <View style={styles.centralContentContainer}>
                <View style={styles.exerciseInfosContainer}>
                    <Text variant='titleLarge' style={{color: Colors.light.brown}}>
                        {currentQuestion?.question}
                    </Text>
                    <Text variant='bodyMedium' style={{marginTop: 10, color: 'black'}}> 
                        Escute o som e escolha o instrumento correspondente.
                    </Text>
                </View>

                <View>
                    <FAB style={{backgroundColor: Colors.light.cian}} color={Colors.dark.cian} icon={isPlaying? "music-note-eighth":"pause-circle-outline"} size='large' onPress={() => setInstrument()}/>
                </View>

                <View style={styles.optionsContainer}>
                    {currentQuestion?.option.map((option) => (
                        <InstrumentButton
                            key={option.id}
                            InstrumentSize={120}
                            InstrumentVariant={option.text.toLowerCase()}
                            InstrumentRotation="-30deg"
                            OptionState={
                                selectedAnswer === option.id
                                    ? option.correct ? "right" : "wrong"
                                    : ""
                            }
                            onPress={selectedAnswer === null ? () => handleAnswer(option.id) : undefined} 
                        />
                    ))}
                </View>
            </View>

            <View style={styles.bottomButtonContainer}>
                {correctAnswer !== null && <ProgressButton onPress={() => (correctAnswer ? proceedPage() : handleExit())} CorrectAnswer={correctAnswer} />}
            </View>

            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title>Sair do exercício?</Dialog.Title>
                    <Dialog.Content>
                        <Text>Ao sair do exercício, você perderá seu progresso!</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => router.push("/home")}>Sair</Button>
                        <Button onPress={() => setVisible(false)}>Permanecer</Button>
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
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
        },
        topButtonContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            // backgroundColor: 'yellow',
        },
        centralContentContainer: {
            flex: 5,
            // backgroundColor: 'green',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        exerciseInfosContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'purple'
        },
        optionsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            // backgroundColor: 'blue'
        },
        bottomButtonContainer: {
            flex: 2,
            // backgroundColor: 'red',
            flexDirection: 'column',
            justifyContent: 'center',
        },


        dialog: {
            backgroundColor: 'white'
          },
          dialogText:{
            color: 'black',
          },
          fab:{
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