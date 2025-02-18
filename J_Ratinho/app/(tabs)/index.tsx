import React from 'react';
import {StyleSheet, View, Text, Platform} from "react-native";
import {Link} from "expo-router";
import {Button, FAB, TextInput} from "react-native-paper";

import {Colors} from '@/constants/Colors';
import ProfileButton from '@/components/profile/ProfileButton';

export default function App() {
    return (
        <View style={styles.container}>
                <ProfileButton ButtonIcon='pencil-outline' ButtonText='Editar foto de Perfil' ButtonColor={Colors.dark.cian} TextColor='white'/>
                
                <View>
                  <TextInput  disabled={true} label="Usuário"
                  />
                  <TextInput  disabled={true} label="Email"
                  />
                </View>

                <ProfileButton ButtonIcon='close' ButtonText='Sair da conta'  ButtonColor={Colors.light.cian} TextColor='white'/>

                <ProfileButton ButtonIcon='trash-can-outline' ButtonText='Excluir conta'  ButtonColor={Colors.dark.red} TextColor='white'/>

        
    </View>
    );
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },

              });