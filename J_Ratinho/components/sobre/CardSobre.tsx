import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton, Title, Paragraph } from 'react-native-paper';

  type CardSobreProps={ 
    cardTitle:string;
    cardParagraph:string;

  }

  const CardSobre = (props:CardSobreProps)=> {
    return (
      <Card style={{ margin: 10 }}>
        <Card.Content>
        <View style={styles.content}>
        <Image
            source={{ uri: "https://stories.bnews.com.br/motivos-para-o-vira-lata-caramelo-se-tornar-patrimonio-nacional-brasileiro/assets/21.jpeg" }}
            style={styles.image}
            resizeMode="contain"
          />
            
            <View style={styles.textContainer}>
            <Title>{props.cardTitle}</Title>
            <Paragraph>{props.cardParagraph}</Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };


  const styles = StyleSheet.create({
    card: {
      margin: 10,
    },
    textContainer: {
      flex: 1,
    },
    content: {
      alignSelf: "flex-start",
    },

    image: {
      width: 10, 
      marginTop: 10,
      marginLeft: 10, 
      resizeMode: "cover",
    },
  });

export default CardSobre;