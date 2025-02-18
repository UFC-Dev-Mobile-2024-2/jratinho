import React from 'react';
import {StyleSheet, View, Text, Platform} from "react-native";
import {Link} from "expo-router";
import {Button, FAB} from "react-native-paper";

import {Colors} from '@/constants/Colors';
import ProfileButton from '@/components/profile/ProfileButton';

export default function App() {
    return (
        <View>
                <ProfileButton ButtonIcon='pencil-outline' ButtonText='Editar foto de Perfil' ButtonColor={Colors.dark.cian} TextColor='white'/>

                <ProfileButton ButtonIcon='close' ButtonText='Sair da conta'  ButtonColor={Colors.light.cian} TextColor='white'/>

                <ProfileButton ButtonIcon='trash-can-outline' ButtonText='Excluir conta'  ButtonColor={Colors.dark.red} TextColor='white'/>

        
    </View>
    );
}

    const styles = StyleSheet.create({
              });
    const styles = StyleSheet.create({
              });