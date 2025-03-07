import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

import { fonts } from '@/constants/Fonts';
import Instrument from '@/components/instruments/Instrument';
import { Colors } from '@/constants/Colors';

type ExitDialogProps = {
  onDismiss?: () => void;
  AccentColor: string;
  TextColor: string;
  DialogTitle: string;
  DialogText: string;
  ConfirmOption: string;
  DismissOption: string;
}

const ExitDialog = (props: ExitDialogProps) => {

    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    return (
        <PaperProvider>
        <View>
          

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog} >
              <Dialog.Title><Text style={{color:props.AccentColor}}>{props.DialogTitle}</Text></Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium" style={styles.dialogText}>{props.DialogText}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog} textColor='darkgray'>{props.DismissOption}</Button>
                <Button buttonColor={props.AccentColor} onPress={hideDialog} textColor={props.TextColor}>{props.ConfirmOption}</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </PaperProvider>
    );
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: 'white'
  },
  dialogText:{
    color: 'black',
  },
  fab:{
    backgroundColor: Colors.dark.green,
    position: 'absolute',
    right: 0,
  }
})
export default ExitDialog;