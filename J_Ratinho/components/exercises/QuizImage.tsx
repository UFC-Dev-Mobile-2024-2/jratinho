import React from 'react';

import { View, StyleSheet, ViewStyle, Pressable, Image } from 'react-native';
import {TouchableRipple} from "react-native-paper";
import Saxofone from '@/assets/images/instruments/saxofone.svg';
import Trompete from '@/assets/images/instruments/trompete.svg';
import Tuba from '@/assets/images/instruments/tuba.svg';
import Clarinete from '@/assets/images/instruments/clarinete.svg';
import FlautaTransversal from '@/assets/images/instruments/flauta-transversal.svg';

type InstrumentProps = {
    onPress?: () => void;
    ImageSource: string;
}
const QuizImage = (props: InstrumentProps) => {
  return (
    <View>
      <TouchableRipple onPress={() => console.log('Pressed')} rippleColor="rgba(0, 0, 0, .32)">
        <Image source={{uri: 'https://www.ceara.gov.br/wp-content/uploads/2022/07/20220701084811__MG_6302-scaled.jpeg'}}/>
        </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({

});
 export default QuizImage;
