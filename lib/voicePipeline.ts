export async function transcribeSpeech() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  const chunks: BlobPart[] = [];

  return new Promise((resolve) => {
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = async () => {
      const audioBlob = new Blob(chunks, { type: "audio/webm" });
      const text = await convertAudioToText(audioBlob);
      resolve(text);
    };

    recorder.start();
    setTimeout(() => recorder.stop(), 3000);
  });
}

async function convertAudioToText(blob: Blob) {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onloadend = () => resolve("User said something"); 
    reader.readAsDataURL(blob);
  });
}

export function speak(text: string) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.1;
  utter.pitch = 1.2;
  utter.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(utter);
}
