import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useFonts } from 'expo-font';

import { fonts } from '@/constants/Fonts';
import Instrument from '@/components/instruments/Instrument';

type ExerciseCardProps = {
  // onPress?: () => void;
  InstrumentVariant: string;
  InstrumentSize: number;
  InstrumentRotation: string;
  MainColor: string;
  CoverColor: string;
  TextColor: string;
}

const ExerciceCard = (props: ExerciseCardProps) => (
  // <TouchableOpacity>
  //   <Card style={[styles.cardMain, {backgroundColor: props.MainColor}]}>
  //   <View style={[styles.customCardCover, {backgroundColor: props.CoverColor}]}>
  //     <Instrument InstrumentVariant={props.InstrumentVariant} InstrumentSize={props.InstrumentSize} InstrumentRotation={props.InstrumentRotation}></Instrument>
  //   </View>
  //   <Card.Content style={{ padding: 10 }}>
  //     <Text style={[styles.cardTitle, {color: props.TextColor}]} variant="titleLarge">Card title</Text>
  //     <Text style={{color: props.TextColor}} variant="bodyMedium">Card content</Text>
  //   </Card.Content>
  // </Card>
  // </TouchableOpacity>
  
  <Card style={[styles.cardMain, {backgroundColor: props.MainColor}]}>
    <View style={[styles.customCardCover, {backgroundColor: props.CoverColor}]}>
      <Instrument InstrumentVariant={props.InstrumentVariant} InstrumentSize={props.InstrumentSize} InstrumentRotation={props.InstrumentRotation}></Instrument>
    </View>
    <Card.Content style={{ padding: 10 }}>
      <Text style={[styles.cardTitle, {color: props.TextColor}]} variant="titleLarge">Card title</Text>
      <Text style={{color: props.TextColor}} variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  cardMain: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  customCardCover: {
    height: 150,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Capriola_400Regular',
  }

})

export default ExerciceCard;