"use client";

import { useEffect, useState } from "react";
import { getHistory, ConversationTurn } from "@/lib/conversation";

export default function MadisonSpeakerTimeline() {
  const [history, setHistory] = useState<ConversationTurn[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHistory(getHistory());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const colorFor = (speaker: ConversationTurn["speaker"]) => {
    switch (speaker) {
      case "owner":
        return "bg-teal-400";
      case "partner":
        return "bg-purple-400";
      case "system":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-black/80 border border-teal-500 rounded-xl p-4 text-xs text-gray-200">
      <div className="font-semibold text-teal-300 mb-2">
        Madison Multi‑Speaker Timeline
      </div>

      <div className="flex gap-2 overflow-x-auto py-2">
        {history.map((turn, i) => (
          <div key={i} className="flex flex-col items-center min-w-[80px]">
            <div
              className={`w-2 h-10 rounded-full ${colorFor(turn.speaker)}`}
            />
            <span className="mt-1 text-[10px] uppercase text-gray-400">
              {turn.speaker}
            </span>
            <span className="mt-1 text-[10px] text-gray-300 line-clamp-2 text-center">
              {turn.text}
            </span>
          </div>
        ))}

        {history.length === 0 && (
          <div className="text-gray-500 text-[11px]">
            No conversation yet. Start talking to Madison.
          </div>
        )}
      </div>
    </div>
  );
}
