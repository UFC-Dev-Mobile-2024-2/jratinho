import React from 'react';
import {StyleSheet, View, Text, Platform} from "react-native";
import {Link} from "expo-router";
import {Button, FAB} from "react-native-paper";

import {Colors} from '@/constants/Colors';

import ExerciceCard from '@/components/exercises/ExerciseCard'; 
import Instrument from '@/components/instruments/Instrument';
import InstrumentButton from '@/components/exercises/InstrumentButton';
import QuestionOption from '@/components/exercises/QuestionOption';
import ProgressButton from '@/components/exercises/ProgressButton';

export default function App() {
    return (
        <View style={styles.container}>
        {/* <InstrumentButton InstrumentSize={120} InstrumentVariant='saxofone' InstrumentRotation='-30deg' OptionState="" onPress={() => alert('Fon fon!')}/> */}

        <ExerciceCard InstrumentVariant='saxofone' InstrumentSize={120} InstrumentRotation='-30deg' MainColor={Colors.dark.orange} CoverColor={Colors.light.orange} TextColor='#ffffff'>
        </ExerciceCard>
        
        {/* <FAB icon="close"
        size="small"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        /> */}

        {/* <QuestionOption OptionState=""/> */}

        {/* <ProgressButton CorrectAnswer={true}></ProgressButton> */}
        
        
    </View>
    );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          padding: 8,
        },
        fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
      });