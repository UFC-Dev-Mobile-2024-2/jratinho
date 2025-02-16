import React from 'react';

import { View, StyleSheet } from 'react-native';
import Saxofone from '@/assets/images/instruments/saxofone.svg';
import Trompete from '@/assets/images/instruments/trompete.svg';
import Tuba from '@/assets/images/instruments/tuba.svg';
import Clarinete from '@/assets/images/instruments/clarinete.svg';
import FlautaTransversal from '@/assets/images/instruments/flauta-transversal.svg';

type InstrumentProps = {
  InstrumentVariant: string;
  InstrumentSize: number;
}
const Instrument = (props: InstrumentProps) => {
  return (
    <View style={[styles.container, {width: props.InstrumentSize, height: props.InstrumentSize}]}>
      {props.InstrumentVariant === 'saxofone' && <Saxofone width={props.InstrumentSize} height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'trompete' && <Trompete width={props.InstrumentSize} height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'tuba' && <Tuba width={props.InstrumentSize} height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'clarinete' && <Clarinete width={props.InstrumentSize} height={props.InstrumentSize} />}
      {props.InstrumentVariant === 'flauta-transversal' && <FlautaTransversal width={props.InstrumentSize} height={props.InstrumentSize} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
 export default Instrument;
