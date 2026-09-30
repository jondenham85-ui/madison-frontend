import { Emotion } from "./emotion";

export function speak(text: string, emotion: Emotion = "neutral") {
  const utter = new SpeechSynthesisUtterance(text);

  switch (emotion) {
    case "calm":
      utter.rate = 0.95;
      utter.pitch = 1.0;
      break;
    case "excited":
      utter.rate = 1.2;
      utter.pitch = 1.3;
      break;
    case "urgent":
      utter.rate = 1.3;
      utter.pitch = 1.1;
      break;
    case "sad":
      utter.rate = 0.9;
      utter.pitch = 0.9;
      break;
    case "neutral":
    default:
      utter.rate = 1.1;
      utter.pitch = 1.2;
      break;
  }

  utter.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(utter);
}
