"use client";

import { useState } from "react";
import { startContinuousMadison } from "@/lib/continuousListening";
import HologramMadison from "@/components/HologramMadison";

export default function MadisonVoiceAssistant() {
  const [active, setActive] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [speaker, setSpeaker] = useState<"owner" | "partner">("owner");

  async function toggleMadison() {
    if (!active) {
      setActive(true);
      startContinuousMadison(
        () => setSpeaking(true),
        () => setSpeaking(false),
        speaker
      );
    } else {
      setActive(false);
      window.location.reload();
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 space-y-2">
        <button
          onClick={toggleMadison}
          className="px-6 py-3 bg-teal-500 text-black rounded-full shadow-lg"
        >
          {active ? "Madison Listening…" : "Activate Madison Voice"}
        </button>

        <div className="flex gap-2 text-xs text-gray-300">
          <button
            onClick={() => setSpeaker("owner")}
            className={`px-3 py-1 rounded-full border ${
              speaker === "owner" ? "border-teal-400" : "border-gray-600"
            }`}
          >
            Owner
          </button>
          <button
            onClick={() => setSpeaker("partner")}
            className={`px-3 py-1 rounded-full border ${
              speaker === "partner" ? "border-teal-400" : "border-gray-600"
            }`}
          >
            Partner
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 left-6">
        <HologramMadison speaking={speaking} />
      </div>
    </>
  );
}
