import { whisperTranscribe } from "./transcription";
import { detectWakeWord } from "./wakeWord";
import { madisonVoice } from "./madisonVoice";
import { speak } from "./voicePipeline";
import { detectEmotion } from "./emotion";

export async function startContinuousMadison(
  onSpeakStart?: () => void,
  onSpeakEnd?: () => void,
  speaker: "owner" | "partner" = "owner"
) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  const chunks: BlobPart[] = [];

  recorder.ondataavailable = (e) => chunks.push(e.data);

  recorder.onstop = async () => {
    const audioBlob = new Blob(chunks, { type: "audio/webm" });
    const text = await whisperTranscribe(audioBlob);

    if (detectWakeWord(text)) {
      const cleaned = text.replace(/madison/gi, "").trim();
      const response = await madisonVoice(cleaned, speaker);
      const emotion = detectEmotion(response.text);

      onSpeakStart && onSpeakStart();
      speak(response.text, emotion);
      setTimeout(() => onSpeakEnd && onSpeakEnd(), 1500);
    }

    chunks.length = 0;
    recorder.start();
    setTimeout(() => recorder.stop(), 2000);
  };

  recorder.start();
  setTimeout(() => recorder.stop(), 2000);
}
