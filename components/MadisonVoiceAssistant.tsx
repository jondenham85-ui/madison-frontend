import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function madisonVoice({ text }) {
  if (!text) return { audio: null };

  const response = await client.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: text
  });

  return {
    audio: Buffer.from(await response.arrayBuffer())
  };
}
