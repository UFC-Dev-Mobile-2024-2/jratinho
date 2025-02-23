import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function TopBarDonate({}) {
  return(
    <Appbar.Header style={styles.bar}>
      <Appbar.Content title="Doe!" style={styles.title} />
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
