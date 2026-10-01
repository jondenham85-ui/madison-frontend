```ts
import { whisperTranscribe } from "./transcription";
import { detectWakeWord } from "./wakeWord";
import { madisonVoice } from "./madisonVoice";
import { speak } from "./voicePipeline";
import { detectEmotion } from "./emotion";

let activeRecorder: MediaRecorder | null = null;
let activeStream: MediaStream | null = null;
let stopTimer: ReturnType<typeof setTimeout> | null = null;
let isRunning = false;

export async function startContinuousMadison(
  onSpeakStart?: () => void,
  onSpeakEnd?: () => void,
  speaker: "owner" | "partner" = "owner"
) {
  if (isRunning) {
    return;
  }

  if (
    typeof window === "undefined" ||
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ) {
    throw new Error("Microphone access is not available in this browser.");
  }

  isRunning = true;

  try {
    activeStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    activeRecorder = new MediaRecorder(activeStream);

    const recorder = activeRecorder;

    const recordChunk = () => {
      if (!isRunning || recorder.state !== "inactive") {
        return;
      }

      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = async () => {
        if (!isRunning) {
          return;
        }

        try {
          const audioBlob = new Blob(chunks, {
            type: "audio/webm",
          });

          const text = await whisperTranscribe(audioBlob);

          if (!isRunning || !text) {
            return;
          }

          if (detectWakeWord(text)) {
            const cleaned = text.replace(/madison/gi, "").trim();

            if (cleaned) {
              const response = await madisonVoice(cleaned, speaker);
              const emotion = detectEmotion(response.text);

              onSpeakStart?.();

              try {
                await speak(response.text, emotion);
              } finally {
                onSpeakEnd?.();
              }
            }
          }
        } catch (error) {
          console.error("Madison continuous listening error:", error);
          onSpeakEnd?.();
        }

        if (isRunning) {
          recordChunk();
        }
      };

      recorder.start();

      stopTimer = setTimeout(() => {
        if (isRunning && recorder.state === "recording") {
          recorder.stop();
        }
      }, 2000);
    };

    recordChunk();
  } catch (error) {
    isRunning = false;

    activeStream?.getTracks().forEach((track) => track.stop());

    activeStream = null;
    activeRecorder = null;

    throw error;
  }
}

export function stopContinuousMadison() {
  isRunning = false;

  if (stopTimer) {
    clearTimeout(stopTimer);
    stopTimer = null;
  }

  if (activeRecorder && activeRecorder.state !== "inactive") {
    activeRecorder.stop();
  }

  activeStream?.getTracks().forEach((track) => track.stop());

  activeRecorder = null;
  activeStream = null;
}
```
