import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList} from "react-native";

import ProfileButton from '@/components/profile/ProfileButton';
import ProfileImage from '@/components/profile/ProfileImage';
import { Colors } from '@/constants/Colors';


export default function App() {

    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Mock de imagens (substituir pelos caminhos corretos)
    const images = [
        { id: 1, source: { uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" } },
        { id: 2, source: { uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" } },
        { id: 3, source: { uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" } },
        { id: 4, source: { uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" } },
        { id: 5, source: { uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" } },
        { id: 6, source: { uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" } }
    ];

    return (
        <View style={styles.container}>

          <View style={styles.imageContainer}>
            <ProfileImage
            source={{ uri: "https://i.pinimg.com/736x/15/59/8e/15598ed1ac362bee9cf0f0bde9a28b10.jpg" }} 
            selected={false} 
            onSelect={() => setSelectedImage(null)}
            />

                <Text style={styles.text}>
                Escolha sua nova foto
                </Text>
            
            <FlatList
                data={images}
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.imageGrid}
                renderItem={({ item }) => (
                    <ProfileImage 
                        source={item.source}
                        selected={selectedImage === item.id}
                        onSelect={() => setSelectedImage(item.id)}
                    />
                )}
            />


          </View>
            <View style={styles.spacing}>
                <ProfileButton 
                    ButtonIcon='check' 
                    ButtonText='Salvar Alterações' 
                    ButtonColor={Colors.dark.green} 
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

    imageGrid: {
        alignItems: 'center',
        gap: 16,
    },
    
    text: {
        textAlign: "center",
        fontSize: 23,
        marginBottom: 10,
        color: "black",
        marginTop: 10,
      },

    spacing: {
        marginBottom: 16,
    },
    input: {
        marginBottom: 10, 
    }
});
