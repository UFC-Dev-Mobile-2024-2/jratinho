import React from 'react';
import { View } from 'react-native';
import { Avatar, Card, IconButton, Title, Paragraph } from 'react-native-paper';


  type CardSobreProps={ 
    cardTitle:string;
    cardParagraph:string;

  }



  const CardSobre = (props:CardSobreProps

  ) => {
    return (
      <Card style={{ margin: 10 }}>
        <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar.Icon size={50} icon="account" />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Title>{props.cardTitle}</Title>
            <Paragraph>{props.cardParagraph}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    );
  };

export default CardSobre;