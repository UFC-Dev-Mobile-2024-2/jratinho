import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Platform, Pressable} from "react-native";
import {Link, useRouter} from "expo-router";
import { FAB, Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

import PlayableInstrument from '@/components/instruments/PlayableInstrument';
import { Colors } from '@/constants/Colors';

import { playInstrument } from '@/services/playInstrument';

export default function PlayingInstrument() {

    let instruments = ['clarinet', 'transversal-flute', 'saxophone', 'tuba', 'trompet'];
    let instrument = instruments[Math.floor(Math.random() * instruments.length)];

    //sound player
    const [sound, setSound] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setSound(sound);
    },[]);

    function setInstrument(){
        setIsPlaying(true);
        playInstrument(instrument);
    }
    function stopInstrument(){
        setIsPlaying(false);   
        playInstrument();
    }

    //exit handler
    const router = useRouter();
    const handleExit = () => {
            resetExercise();
            router.push("/home");
    };
    const resetExercise = () => {
        setIsPlaying(false);
    };
    
    useEffect(() => {
        return () => resetExercise(); // Reset state when leaving the page
    }, [router]);


    return (
    <View style={[styles.container, {backgroundColor: Colors.light.brown}]}>
        <PaperProvider>
            <View style={styles.topButtonContainer}>
                <FAB icon="close" size="small" style={styles.fab} onPress={handleExit}/>
            </View>
            
            <View style={styles.centralContentContainer}>
                <View style={styles.exerciseInfosContainer}>
                    <Text variant='titleLarge' style={{color:'white'}}>
                       Experimente!
                    </Text>
                    {isPlaying ? null : <Text variant='bodyMedium' style={{marginTop: 10, color: 'white'}}>Toque no instrumento!</Text>}
                </View>

                <View>
                    <PlayableInstrument InstrumentSize={ isPlaying ? 500 : 400} InstrumentVariant={instrument} InstrumentRotation='0deg' onPressIn={() => setInstrument()} onPressOut={() => stopInstrument()}/>
                </View>

            </View>
        </PaperProvider>
    </View>
  );
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
        },
        topButtonContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            // backgroundColor: 'yellow'
        },
        centralContentContainer: {
            flex: 5,
            // backgroundColor: 'green',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        exerciseInfosContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'purple'
        },
        optionsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            // backgroundColor: 'blue'
        },
        bottomButtonContainer: {
            flex: 2,
            // backgroundColor: 'red',
            flexDirection: 'column',
            justifyContent: 'center',
        },

        dialog: {
            backgroundColor: 'white'
          },
          dialogText:{
            color: 'black',
          },
          fab:{
            backgroundColor: Colors.dark.green,
            position: 'absolute',
            top: 10,
            right: 10,
          }
      });