import React from 'react';
import {StyleSheet, View, Pressable} from "react-native";
import { Button } from "react-native-paper";
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/Fonts';
import Instrument from '@/components/instruments/Instrument';
import { Colors } from '@/constants/colors';

type InstrumentButtonProps = {
  onPress?: () => void;
  InstrumentVariant: string;
  InstrumentSize: number;
  InstrumentRotation: string;
  OptionState: string;
}

const InstrumentButton = (props: InstrumentButtonProps) => (
  <Pressable onPress={props.onPress}>
    <View style={styles.container}>
      {props.OptionState === '' && <Button style={styles.instrumentButton} buttonColor={Colors.light.cian} mode='contained'><View></View></Button>}
      {props.OptionState === 'wrong' && <Button style={styles.instrumentButton} buttonColor={Colors.dark.red} mode='contained'><View></View></Button>}
      {props.OptionState === 'right' && <Button style={styles.instrumentButton} buttonColor={Colors.dark.green} mode='contained'><View></View></Button>}
      <Instrument InstrumentVariant={props.InstrumentVariant} InstrumentSize={props.InstrumentSize} InstrumentRotation={props.InstrumentRotation}></Instrument>
    </View>
  </Pressable>
);


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  instrumentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 50,
  },

})

export default InstrumentButton;