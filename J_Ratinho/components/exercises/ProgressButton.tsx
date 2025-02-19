import React from 'react';
import {StyleSheet, View} from "react-native";
import { Button, Text } from "react-native-paper";
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/Fonts';
import {Colors} from '@/constants/Colors';

type ProgressButtonProps = {
  CorrectAnswer: boolean;
}

const ProgressButton = (props: ProgressButtonProps) => (
    <View style={styles.container}>
        <Text style={{color: props.CorrectAnswer ? Colors.dark.green : Colors.dark.orange, marginBottom: 16}} >{props.CorrectAnswer ? 'Muito bem! Continue assim!' : 'Erros acontecem... sempre há uma segunda chance!'}</Text>
        <Button buttonColor={props.CorrectAnswer? Colors.dark.green : Colors.dark.orange} textColor='white' mode='contained'>Prosseguir</Button>
    </View>
);


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  instrumentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
  },

})

export default ProgressButton;