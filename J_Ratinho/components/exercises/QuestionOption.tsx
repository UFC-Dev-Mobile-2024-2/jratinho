import React from 'react';
import {StyleSheet, View} from "react-native";
import { Button } from "react-native-paper";
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/Fonts';
import Instrument from '../instruments/Instrument';
import { Colors } from '@/constants/colors';

type OptionProps = {
    OptionState: string;
    OptionText: string;
  }

const QuestionOption = (props: OptionProps) => (
    <View>
        {props.OptionState === '' && <Button buttonColor={Colors.light.cian} mode='contained'>{props.OptionText}</Button>}
        {props.OptionState === 'right' && <Button buttonColor={Colors.dark.green} mode='contained' onPress={() => alert('Button pressed!')}>{props.OptionText}</Button>}
        {props.OptionState === 'wrong' && <Button buttonColor={Colors.dark.red} mode='contained' onPress={() => alert('Button pressed!')}>{props.OptionText}</Button>}
    </View>
);

export default QuestionOption;