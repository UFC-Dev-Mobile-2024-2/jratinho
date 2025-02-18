import React from 'react';
import {StyleSheet, View, Pressable} from "react-native";
import { Button } from "react-native-paper";
import { useFonts } from 'expo-font';
import {Colors} from '@/constants/Colors';

type ProfileButtonProps = {
  onPress?: () => void;
  ButtonIcon:string;
  ButtonText:string;
  ButtonColor:string;
  TextColor:string;

}

const ProfileButton = (props: ProfileButtonProps) => (
    <View>
       <Button icon={props.ButtonIcon} buttonColor={props.ButtonColor} textColor={props.TextColor} mode="contained" onPress={() => console.log('Pressed')}>
        {props.ButtonText}
  </Button>
    </View>
  
);


const styles = StyleSheet.create({
  })

export default ProfileButton;