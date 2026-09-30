export function detectWakeWord(text: string) {
  const wakeWords = ["madison", "hey madison", "madison ai"];
  const normalized = text.toLowerCase();

  return wakeWords.some(w => normalized.startsWith(w));
}
