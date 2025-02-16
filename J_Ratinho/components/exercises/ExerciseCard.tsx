import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const ExerciceCard = () => (
  <Card style={{ borderRadius: 10, overflow: 'hidden' }}>
    <Card.Cover style={{ borderRadius: 0 }} source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content style={{ padding: 10 }}>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
);

export default ExerciceCard;