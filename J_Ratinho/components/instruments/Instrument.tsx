import React from 'react';

import { View, StyleSheet, ViewStyle } from 'react-native';
import Saxofone from '@/assets/images/instruments/saxofone.svg';
import Trompete from '@/assets/images/instruments/trompete.svg';
import Tuba from '@/assets/images/instruments/tuba.svg';
import Clarinete from '@/assets/images/instruments/clarinete.svg';
import FlautaTransversal from '@/assets/images/instruments/flauta-transversal.svg';

type InstrumentProps = {
  InstrumentVariant: string;
  InstrumentSize: number;
  InstrumentRotation: string
  style?: ViewStyle;
}
const Instrument = (props: InstrumentProps) => {
  return (
    <View style={[styles.container, {width: 0, height: props.InstrumentSize, transform: [{rotate: props.InstrumentRotation}]}]}>
      {props.InstrumentVariant === 'saxophone' && <Saxofone height={props.InstrumentSize}  />}
      {props.InstrumentVariant === 'trompet' && <Trompete height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'tuba' && <Tuba height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'clarinet' && <Clarinete height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'transversal-flute' && <FlautaTransversal height={props.InstrumentSize} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 export default Instrument;
