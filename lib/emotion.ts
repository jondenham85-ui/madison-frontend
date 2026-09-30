export type Emotion = "calm" | "excited" | "urgent" | "sad" | "neutral";

export function detectEmotion(text: string): Emotion {
  const t = text.toLowerCase();

  if (t.match(/urgent|asap|now|immediately/)) return "urgent";
  if (t.match(/happy|excited|awesome|great/)) return "excited";
  if (t.match(/sad|upset|tired|exhausted/)) return "sad";
  if (t.match(/ok|fine|normal|steady/)) return "calm";

  return "neutral";
}
