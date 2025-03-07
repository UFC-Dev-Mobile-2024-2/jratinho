import React from 'react';

import { View, StyleSheet, ViewStyle } from 'react-native';
import Flat from '@/assets/images/notes/flat.svg'
import Beamedeighthnores from '@/assets/images/notes/beamedeighthnotes.svg'
import Beamedsixteenthnotes from '@/assets/images/notes/beamedeighthnotes.svg'
import Eightnote from '@/assets/images/notes/eighthnote(quaver).svg'
import Halfnotes from '@/assets/images/notes/halfnotes.svg'
import Musicalsharpsign from'@/assets/images/notes/musicalsharpsign.svg'
import Quartenote from '@/assets/images/notes/quarternote.svg'
import Sixteenthnote from '@/assets/images/notes/sixteenthnote(semiquaver).svg'
import Sixtyfouthnote from '@/assets/images/notes/sixty-fourthnote(hemidemisemiquaver).svg'
import Thirtysecondnote from '@/assets/images/notes/thirty-secondnote(demisemiquaver).svg'
import Trebleclef from '@/assets/images/notes/trebleclef.svg'
import Wholenote from '@/assets/images/notes/wholenote.svg'

type NotesProps = {
    NoteVariant: string;
    NotetSize: number;
    NoteRotation: string
    style?: ViewStyle;
}
const Notes = (props: NotesProps) => {
  return (
    <View style={[styles.container, {width: 0, height: props.NotetSize, transform: [{rotate: props.NoteRotation}]}]}>
      {props.NoteVariant === 'flat' && <Flat height={props.NotetSize}  />}
      {props.NoteVariant === 'beamedeighthnores' && <Beamedeighthnores height={props.NotetSize} />}
      {props.NoteVariant === 'beamedsixteenthnotes' && <Beamedsixteenthnotes height={props.NotetSize} />}
      {props.NoteVariant === 'eightnote' && <Eightnote height={props.NotetSize} />}
      {props.NoteVariant === 'halfnotes' && <Halfnotes height={props.NotetSize} />}
      {props.NoteVariant === 'musicalsharpsign' && <Musicalsharpsign height={props.NotetSize} />}
      {props.NoteVariant === 'quartenote' && <Quartenote height={props.NotetSize} />}
      {props.NoteVariant === 'sixtyfouthnote' && <Sixtyfouthnote height={props.NotetSize} />}
      {props.NoteVariant === 'thirtysecondnote' && <Thirtysecondnote height={props.NotetSize} />}
      {props.NoteVariant === 'sixteenthnote' && <Sixteenthnote height={props.NotetSize} />}
      {props.NoteVariant === 'trebleclef' && <Trebleclef height={props.NotetSize} />}
      {props.NoteVariant === 'wholenote' && <Wholenote height={props.NotetSize} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 export default Notes;