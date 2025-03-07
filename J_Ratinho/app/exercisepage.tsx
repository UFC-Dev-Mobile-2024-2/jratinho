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

const token = 'dd40d5c313a14a7c10586fef30dd3a33de92666981e04be9a17c7b4b34ef9b0e8cb913e30cad5a504b5df838cc340e7df04e447e24cf11bbd91809cfc3eeb6e580580b526e8bf2017caceb2d801a4313dfc260b78461714a1ff40609fab244b32f630d45bbed44affafdb41769e84079558cf700d83a84c320a91d63515fa6bc'

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
                    const filteredQuestions = loadedQuestions.filter((exerciseData: any) => exerciseData.topic.split(':')[0] === 'instrument');
                    setQuestions(filteredQuestions);
                    setLoading(false);
                    const randomQuestion = getRandomQuestion(filteredQuestions);
                    setCurrentQuestion(randomQuestion);
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
        isPlaying ? playInstrument(currentQuestion?.topic) : playInstrument(currentQuestion?.topic.split(':')[1]);
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