import React, { useState } from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {Link} from "expo-router";
import { FAB, Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';


import ExerciceCard from '@/components/exercises/ExerciseCard'; 
import Instrument from '@/components/instruments/Instrument';
import InstrumentButton from '@/components/exercises/InstrumentButton';
import QuestionOption from '@/components/exercises/QuestionOption';
import ProgressButton from '@/components/exercises/ProgressButton';
import PlayableInstrument from '@/components/instruments/PlayableInstrument';
import { Colors } from '@/constants/Colors';

import { playInstrument } from '@/services/playInstrument';
import saxophoneSound from "@/assets/sounds/saxophone.mp3";
import tubaSound from "@/assets/sounds/tuba.mp3";
import fluteSound from "@/assets/sounds/transversal-flute.mp3";
import clarinetSound from "@/assets/sounds/clarinet.mp3";
import trompetSound from "@/assets/sounds/trumpet.mp3";

export default function Exercisepage() {
    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
    <View style={styles.container}>
        <PaperProvider>
            <View style={styles.topButtonContainer}>
                <FAB icon="close" size="small" style={styles.fab} onPress={showDialog}/>
            </View>

            <View style={styles.centralContentContainer}>
                <View style={styles.exerciseInfosContainer}>
                    <Text variant='titleLarge' style={{color: Colors.light.brown}}>
                        Qual instrumento tem esse som?
                    </Text>
                    <Text variant='bodyMedium' style={{marginTop: 10, color: 'black'}}> 
                        Escute o som e escolha o instrumento correspondente.
                    </Text>
                </View>

                <View>
                    <FAB style={{backgroundColor: Colors.light.cian}} color={Colors.dark.cian} icon="music-note-eighth" size='large' onPress={() => playInstrument(saxophoneSound)}/>
                </View>

                <View style={styles.optionsContainer}>
                    <InstrumentButton InstrumentSize={120} InstrumentVariant='saxofone' InstrumentRotation='-30deg' OptionState="" onPress={() => alert('Errou!')}/>
                    <InstrumentButton InstrumentSize={120} InstrumentVariant='tuba' InstrumentRotation='-30deg' OptionState="right" onPress={() => alert('Acertou!')}/>
                    <InstrumentButton InstrumentSize={120} InstrumentVariant='flauta-transversal' InstrumentRotation='-30deg' OptionState="" onPress={() => alert('Errou!')}/>
                    <InstrumentButton InstrumentSize={120} InstrumentVariant='clarinete' InstrumentRotation='-30deg' OptionState="" onPress={() => alert('Errou!')}/>
                </View>
            </View>

            <View style={styles.bottomButtonContainer}>
                <ProgressButton CorrectAnswer={true}></ProgressButton>
            </View>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog} >
                    <Dialog.Title><Text style={{color:Colors.dark.green}}>Sair do exercício?</Text></Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium" style={styles.dialogText}>Ao sair do exercício, você perderá seu progresso!</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog} textColor='darkgray'>Sair</Button>
                        <Button buttonColor={Colors.dark.green} onPress={hideDialog} textColor='white'>Permanecer</Button>
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