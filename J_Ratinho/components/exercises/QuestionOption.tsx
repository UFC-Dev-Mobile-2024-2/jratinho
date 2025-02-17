import React from 'react';
import {StyleSheet, View} from "react-native";
import { Button } from "react-native-paper";
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/Fonts';
import Instrument from '../instruments/Instrument';
import {Colors} from '@/constants/Colors';

type OptionProps = {
    OptionState: string;
  }

const QuestionOption = (props: OptionProps) => (
    <View>
        {props.OptionState === '' && <Button buttonColor={Colors.light.cian} mode='contained' onPress={() => alert('Button pressed!')}>Alternativaaah</Button>}
        {props.OptionState === 'right' && <Button buttonColor={Colors.dark.green} mode='contained' onPress={() => alert('Button pressed!')}>Alternativaaah</Button>}
        {props.OptionState === 'wrong' && <Button buttonColor={Colors.dark.red} mode='contained' onPress={() => alert('Button pressed!')}>Alternativaaah</Button>}
    </View>
);

export default QuestionOption;