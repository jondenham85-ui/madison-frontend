"use client";

import { useEffect, useState } from "react";
import { getHistory, ConversationTurn } from "@/lib/conversation";

export default function MadisonControlRoom() {
  const [history, setHistory] = useState<ConversationTurn[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHistory(getHistory());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 right-6 w-80 bg-black/80 border border-teal-500 rounded-xl p-4 text-xs text-gray-200">
      <div className="font-semibold text-teal-300 mb-2">
        Madison Voice Control Room
      </div>

      <div className="space-y-1 max-h-64 overflow-y-auto">
        {history.map((turn, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-gray-700/60 pb-1"
          >
            <span className="uppercase text-[10px] text-gray-400">
              {turn.speaker}
            </span>
            <span className="ml-2 text-[11px]">{turn.text}</span>
          </div>
        ))}

        {history.length === 0 && (
          <div className="text-gray-500 text-[11px]">
            No voice turns yet. Say “Madison…” to start.
          </div>
        )}
      </div>
    </div>
  );
}
