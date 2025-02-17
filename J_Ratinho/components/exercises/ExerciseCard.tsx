import React from 'react';
import {StyleSheet} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/Fonts';

const ExerciceCard = () => (
  <Card style={styles.card_main}>
    <Card.Cover style={{ borderRadius: 0 }} source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content style={{ padding: 10 }}>
      <Text style={styles.card_title} variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card_main: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Capriola_400Regular',
  }

})

export default ExerciceCard;