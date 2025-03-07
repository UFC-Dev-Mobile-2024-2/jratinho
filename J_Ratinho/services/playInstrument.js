import { Audio } from "expo-av";

import saxophoneSound from "@/assets/sounds/saxophone.mp3";
import tubaSound from "@/assets/sounds/tuba.mp3";
import fluteSound from "@/assets/sounds/transversal-flute.mp3";
import clarinetSound from "@/assets/sounds/clarinet.mp3";
import trompetSound from "@/assets/sounds/trumpet.mp3";
import Fail from "@/assets/sounds/fail.mp3";
import Success from "@/assets/sounds/right.mp3";

let soundInstance = null;
let soundFile = null;

export const playInstrument = async (instrument) => {

  switch (instrument) {
    case "saxophone":
      soundFile = saxophoneSound;
      break;
    case "tuba":
      soundFile = tubaSound;
      break;
    case "transversal-flute":
      soundFile = fluteSound;
      break;
    case "clarinet":
      soundFile = clarinetSound;
      break;
    case "trompet":
      soundFile = trompetSound;
      break;
    case "success":
      soundFile = Success;
      break;
    default:
      soundFile = Fail;
      break;
  }

  try {
    if (!soundInstance) {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      soundInstance = sound;
      soundInstance.setOnPlaybackStatusUpdate(async (status) => {
        if (status.didJustFinish) {
          await soundInstance.stopAsync();
          await soundInstance.unloadAsync();
          soundInstance = null; 
          console.log("Resetado");
        }
      });
    }

    const status = await soundInstance.getStatusAsync();

    if (status.isLoaded) {
      if (status.isPlaying) {
        await soundInstance.pauseAsync();
        console.log("Paused");
      } else {
        await soundInstance.playAsync();
        console.log("Playing");
      }
    }
  } catch (error) {
    console.error("Error playing instrument:", error);
  }
};
