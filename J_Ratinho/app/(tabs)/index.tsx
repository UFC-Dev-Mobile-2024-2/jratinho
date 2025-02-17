import React from 'react';
import {StyleSheet, View, Text, Platform} from "react-native";
import {Link} from "expo-router";
import {Button, FAB} from "react-native-paper";

import ExerciceCard from '@/components/exercises/ExerciseCard';
import Instrument from '@/components/instruments/Instrument';
import InstrumentButton from '@/components/exercises/InstrumentButton';
import QuestionOption from '@/components/exercises/QuestionOption';

export default function App() {
    return (
        <View style={styles.container}>
        {/* <InstrumentButton/> */}

        {/* <ExerciceCard>
        </ExerciceCard> */}
        
        {/* <FAB icon="close"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        /> */}

        {/* <Instrument InstrumentVariant='tuba' InstrumentSize = {200} ></Instrument>
        <Instrument InstrumentVariant='saxofone' InstrumentSize = {200} ></Instrument> */}

        <QuestionOption OptionState=""/>
        <QuestionOption OptionState="wrong"/>
        <QuestionOption OptionState="right"/>
        
        
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