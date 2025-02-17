import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
  
  const CardSobre = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"/>
    <Card.Content>
<Text style={{ fontSize: 20, fontWeight: "bold" }}>Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 
  </Card>
);   

export default CardSobre;
