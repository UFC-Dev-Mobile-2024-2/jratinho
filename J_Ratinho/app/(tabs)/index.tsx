import React from 'react';
import {StyleSheet, View, Text, Platform} from "react-native";
import {Link} from "expo-router";
import {Button} from "react-native-paper";

import ExerciceCard from '@/components/exercises/ExerciseCard';
import Instrument from '@/components/instruments/Instrument';

export default function App() {
    return (
        <View style={styles.container}>
        <ExerciceCard>

        </ExerciceCard>
        
        <Text>A</Text>

        <Instrument InstrumentVariant='tuba' InstrumentSize = {200} ></Instrument>
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
      
      });