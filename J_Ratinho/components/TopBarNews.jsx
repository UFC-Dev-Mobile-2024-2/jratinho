import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function TopBarNews({}) {
  return(
    <Appbar.Header style={styles.bar}>
      <Appbar.Content title="Noticias" style={styles.title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
  },
  bar:{
    backgroundColor: "#5087ca",
  },
});
