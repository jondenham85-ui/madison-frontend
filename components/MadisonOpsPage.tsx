"use client";

import { getHistory } from "@/lib/conversation";

export default function MadisonOpsPage() {
  const history = getHistory();

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 w-72 bg-black/80 border border-teal-500 rounded-xl p-4 text-xs text-gray-200">
      <div className="font-semibold text-teal-300 mb-2">
        Madison Ops
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.map((turn, i) => (
          <div key={i} className="border-b border-gray-700 pb-1">
            <div className="uppercase text-[10px] text-gray-400">
              {turn.speaker}
            </div>
            <div className="text-[11px]">{turn.text}</div>
          </div>
        ))}

        {history.length === 0 && (
          <div className="text-gray-500 text-[11px]">
            No voice activity yet.
          </div>
        )}
      </div>
    </div>
  );
}
