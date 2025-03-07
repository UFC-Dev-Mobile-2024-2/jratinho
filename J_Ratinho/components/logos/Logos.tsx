import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import MarcaSolida from '@/assets/images/marca-solida.svg'
import MarcaColorida from '@/assets/images/marca-colorida.svg';

type SolidLogoProps = {
    LogoVariant: 'solid';
    LogoWidth: number;
    LogoColor: string; // Obrigatório apenas para 'solid'
    style?: ViewStyle;
  };
  
  type ColoredLogoProps = {
    LogoVariant: 'colored';
    LogoWidth: number;
    style?: ViewStyle;
  };

  type LogoProps = SolidLogoProps | ColoredLogoProps;

const Logo = (props: LogoProps) => {
  return (
    <View style={[styles.container, {width: '100%', height: '100%'}]}>
        {props.LogoVariant === 'solid' && (
        <MarcaSolida width={props.LogoWidth} fill={props.LogoColor} height={'100%'} />
        )}
        {props.LogoVariant === 'colored' && (
        <MarcaColorida width={props.LogoWidth} height={'100%'} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 export default Logo;
