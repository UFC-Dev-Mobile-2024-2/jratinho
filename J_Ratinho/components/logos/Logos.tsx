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
    <View style={[styles.container, {width: 'auto', height: 'auto'}]}>
        {props.LogoVariant === 'solid' && (
        <MarcaSolida width={props.LogoWidth} fill={props.LogoColor} height={'auto'} />
        )}
        {props.LogoVariant === 'colored' && (
        <MarcaColorida width={props.LogoWidth} height={'auto'} />
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
