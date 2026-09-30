export async function whisperTranscribe(audioBlob: Blob) {
  const form = new FormData();
  form.append("file", audioBlob, "audio.webm");
  form.append("model", "whisper-1");

  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`
    },
    body: form
  });

  const data = await res.json();
  return data.text;
}
