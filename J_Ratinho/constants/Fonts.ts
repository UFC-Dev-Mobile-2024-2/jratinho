import { useFonts } from 'expo-font';
//import { SplashScreen } from 'expo-splash-screen';

import {   
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic } from '@expo-google-fonts/dm-sans';

import { Capriola_400Regular } from '@expo-google-fonts/capriola';

export const fonts = {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
  Capriola_400Regular,
}

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({  });

  return fontsLoaded;
};