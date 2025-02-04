import { useFonts } from 'expo-font';

import {   DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic } from '@expo-google-fonts/dm-sans';

import {   Capriola_400Regular } from '@expo-google-fonts/capriola';

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
    Capriola_400Regular,
  });

  return fontsLoaded;
};