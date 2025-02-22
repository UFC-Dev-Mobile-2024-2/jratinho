import React from 'react';
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

import ProfileButton from '@/components/profile/ProfileButton';
import ProfileImage from '@/components/profile/ProfileImage';
import { Colors } from '@/constants/colors';


export default function App() {
    return (
        <View style={styles.container}>

          <View style={styles.imageContainer}>
            <ProfileImage
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/O_Xaropinho.jpg/1200px-O_Xaropinho.jpg" }} 
            selected={false} 
            onSelect={() => console.log('Imagem')} 
            />

          </View>
            <View style={styles.spacing}>
                <ProfileButton 
                    ButtonIcon='pencil-outline' 
                    ButtonText='Editar foto de Perfil' 
                    ButtonColor={Colors.dark.cian} 
                    TextColor='white'
                />
            </View>

            <View style={styles.spacing}>
                <TextInput disabled={true} label="Usuário" style={styles.input} />
                <TextInput disabled={true} label="Email" style={styles.input} />
            </View>

            <View style={styles.spacing}>
                <ProfileButton 
                    ButtonIcon='close' 
                    ButtonText='Sair da conta'  
                    ButtonColor={Colors.light.cian} 
                    TextColor='white'
                />
            </View>

            <View style={styles.spacing}>
                <ProfileButton 
                    ButtonIcon='trash-can-outline' 
                    ButtonText='Excluir conta'  
                    ButtonColor={Colors.dark.red} 
                    TextColor='white'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 36,
    },
    imageContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },

    spacing: {
        marginBottom: 16,
    },
    input: {
        marginBottom: 10, 
    }
});
