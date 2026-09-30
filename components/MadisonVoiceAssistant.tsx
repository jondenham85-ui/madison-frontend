"use client";

import { useState } from "react";
import { transcribeSpeech, speak } from "@/lib/voicePipeline";
import { madisonVoice } from "@/lib/madisonVoice";

export default function MadisonVoiceAssistant() {
  const [thinking, setThinking] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  async function activateMadison() {
    setThinking(true);

    const userSpeech = await transcribeSpeech();
    setLastMessage(userSpeech);

    const response = await madisonVoice(userSpeech);

    speak(response.result?.summary || "I heard you.");

    setThinking(false);
  }

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={activateMadison}
        className="px-6 py-3 bg-teal-500 text-black rounded-full shadow-lg"
      >
        {thinking ? "Madison Listening..." : "Talk to Madison"}
      </button>

      <div className="mt-2 text-sm text-gray-400">
        {lastMessage && `You said: ${lastMessage}`}
      </div>
    </div>
  );
}
