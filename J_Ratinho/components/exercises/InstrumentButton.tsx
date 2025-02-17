import React from 'react';
import {StyleSheet, View} from "react-native";
import { Button } from "react-native-paper";
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/Fonts';
import Instrument from '../instruments/Instrument';


const InstrumentButton = () => (
  <View>
    <Button style={styles.instrumentButton} mode='contained' onPress={() => alert('Button pressed!')}>
      <Instrument InstrumentVariant='saxofone' InstrumentSize={200}></Instrument>
    </Button>
    
  </View>
);

const styles = StyleSheet.create({
  instrumentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
  instrument: {
    position: 'absolute',
  }

})

export default InstrumentButton;