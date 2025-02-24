import React from 'react';
import {StyleSheet, View, Platform} from "react-native";
import {Link} from "expo-router";
import {Button, FAB, Text} from "react-native-paper";


import ExerciceCard from '@/components/exercises/ExerciseCard'; 
import Instrument from '@/components/instruments/Instrument';
import InstrumentButton from '@/components/exercises/InstrumentButton';
import QuestionOption from '@/components/exercises/QuestionOption';
import ProgressButton from '@/components/exercises/ProgressButton';
import ExitDialog from '@/components/exercises/ExitDialog';
import PlayableInstrument from '@/components/instruments/PlayableInstrument';
import { Colors } from '@/constants/colors';

export default function App() {
    return (
    <View style={styles.container}>
            <View style={styles.topButtonContainer}>
                <ExitDialog 
                ConfirmOption='Continuar' 
                DismissOption='Sair'
                AccentColor={Colors.dark.green}
                TextColor='#ffffff'
                DialogTitle='Tem certeza?'
                DialogText='Você deseja realmente sair?'
                onDismiss={() => console.log('Dialog dismissed')}/> 
            </View>

            <View style={styles.centralContentContainer}>
                <View style={styles.exerciseInfosContainer}>
                    <Text variant='titleLarge' style={{color: Colors.light.brown}}>
                        Qual instrumento tem esse som?
                    </Text>
                    <Text variant='bodyMedium' style={{marginTop: 10}}> 
                        Escute o som e escolha o instrumento correspondente
                    </Text>
                </View>

                <View>
                    <FAB style={{backgroundColor: Colors.light.cian}} color={Colors.dark.cian} icon="music-note-eighth" size='large' onPress={() => console.log('Playing sound')} />
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
    </View>
    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          padding: 8,
        },
        topButtonContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            // backgroundColor: 'yellow'
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
      });