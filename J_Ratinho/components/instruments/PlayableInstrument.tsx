import React from 'react';

import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import Saxofone from '@/assets/images/instruments/saxofone.svg';
import Trompete from '@/assets/images/instruments/trompete.svg';
import Tuba from '@/assets/images/instruments/tuba.svg';
import Clarinete from '@/assets/images/instruments/clarinete.svg';
import FlautaTransversal from '@/assets/images/instruments/flauta-transversal.svg';

type InstrumentProps = {
    onPressIn?: () => void;
    onPressOut?: () => void;
    InstrumentVariant: string;
    InstrumentSize: number;
    InstrumentRotation: string
    style?: ViewStyle;
}
const Instrument = (props: InstrumentProps) => {
  return (
    <View style={[styles.container, {width: props.InstrumentSize, height: props.InstrumentSize, transform: [{rotate: props.InstrumentRotation}]}]}>
      <Pressable onPressIn={props.onPressIn} onPressOut={props.onPressOut}>
        {props.InstrumentVariant === 'saxofone' && <Saxofone height={props.InstrumentSize}  />}
        {props.InstrumentVariant === 'trompete' && <Trompete height={props.InstrumentSize} />}
        {props.InstrumentVariant === 'tuba' && <Tuba height={props.InstrumentSize} />}
        {props.InstrumentVariant === 'clarinet' && <Clarinete height={props.InstrumentSize} />}
        {props.InstrumentVariant === 'flauta-transversal' && <FlautaTransversal height={props.InstrumentSize} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 export default Instrument;
