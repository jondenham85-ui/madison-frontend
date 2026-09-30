"use client";

import { useEffect, useState } from "react";
import { getHistory } from "@/lib/conversation";
import { detectEmotion, Emotion } from "@/lib/emotion";

type EmotionCount = Record<Emotion, number>;

export default function MadisonEmotionHeatmap() {
  const [counts, setCounts] = useState<EmotionCount>({
    calm: 0,
    excited: 0,
    urgent: 0,
    sad: 0,
    neutral: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const history = getHistory();
      const next: EmotionCount = {
        calm: 0,
        excited: 0,
        urgent: 0,
        sad: 0,
        neutral: 0
      };

      history.forEach(turn => {
        const e = detectEmotion(turn.text);
        next[e] += 1;
      });

      setCounts(next);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const max = Math.max(...Object.values(counts), 1);

  const entries: { label: Emotion; color: string }[] = [
    { label: "calm", color: "bg-blue-500" },
    { label: "excited", color: "bg-teal-400" },
    { label: "urgent", color: "bg-red-500" },
    { label: "sad", color: "bg-purple-500" },
    { label: "neutral", color: "bg-gray-500" }
  ];

  return (
    <div className="fixed top-6 left-6 w-72 bg-black/80 border border-teal-500 rounded-xl p-4 text-xs text-gray-200">
      <div className="font-semibold text-teal-300 mb-2">
        Madison Emotion Heatmap
      </div>

      <div className="space-y-2">
        {entries.map(({ label, color }) => {
          const value = counts[label];
          const width = `${(value / max) * 100}%`;

          return (
            <div key={label}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="uppercase text-gray-400">{label}</span>
                <span>{value}</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className={`${color} h-2`} style={{ width }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
