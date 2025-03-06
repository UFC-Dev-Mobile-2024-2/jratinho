import { Audio } from "expo-av";

export const playInstrument = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    const status = await sound.getStatusAsync();
    const duration = status.durationMillis / 1000;

    await sound.playAsync();
};
