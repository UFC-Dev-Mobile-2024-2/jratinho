import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {useRouter} from "expo-router";
import { FAB, Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

import InstrumentButton from '@/components/exercises/InstrumentButton';
import ProgressButton from '@/components/exercises/ProgressButton';
import { Colors } from '@/constants/Colors';

import { exerciseData } from "@/fakedb/exerciseData";
import { playInstrument } from "@/services/playInstrument";

const { question, options, topic} = exerciseData.questions[3].attributes;


export default function Exercisepage() {
    //exit dialog
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const handleExit = () => {
        console.log("exiting");
        setIsPlaying(false);
        setVisible(false);
        resetExercise();
        router.push("/(tabs)");
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
        isPlaying ? playInstrument(topic) : playInstrument(topic);
    }
    //exercise
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);

    const handleAnswer = (id: string) => {
        if (selectedAnswer !== null) return; 
        const selectedOption = options.find(option => option.id === id);
        if (selectedOption) {
            setSelectedAnswer(id);
            setCorrectAnswer(selectedOption.correct ? true : false);
        }
    };

    
    return (       
    <View style={styles.container}>
        <PaperProvider>
            <View style={styles.topButtonContainer}>
                <FAB icon="close" size="small" style={styles.fab} onPress={() => setVisible(!visible)}/>
            </View>

            <View style={styles.centralContentContainer}>
                <View style={styles.exerciseInfosContainer}>
                    <Text variant='titleLarge' style={{color: Colors.light.brown}}>
                        {question}
                    </Text>
                    <Text variant='bodyMedium' style={{marginTop: 10, color: 'black'}}> 
                        Escute o som e escolha o instrumento correspondente.
                    </Text>
                </View>

                <View>
                    <FAB style={{backgroundColor: Colors.light.cian}} color={Colors.dark.cian} icon="music-note-eighth" size='large' onPress={() => setInstrument()}/>
                </View>

                <View style={styles.optionsContainer}>
                    {options.map((option) => (
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
                        <Button onPress={() => router.push("/(tabs)")}>Sair</Button>
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
          }
      });