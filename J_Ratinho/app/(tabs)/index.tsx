import React from 'react';
import { StyleSheet, Button, View, Text, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
const ViewBoxesWithColorAndText = () => {
  const onPress = () => {
    Alert.alert('Button pressed');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{backgroundColor: 'white'}}>
          <Text>Seja bem vindo ao aplicativo{'\n'}J.Ratinho</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Entrar</Text>
            
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 50,
  },
});

export default ViewBoxesWithColorAndText;