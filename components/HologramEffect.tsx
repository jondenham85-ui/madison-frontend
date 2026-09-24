"use client";

import { useEffect, useState } from "react";
import { onEvent } from "@/lib/ws";

export default function HologramEffect() {
  const [intensity, setIntensity] = useState(1);

  useEffect(() => {
    onEvent((event) => {
      if (event.type === "revenue:update") setIntensity(1.2);
      if (event.type === "automation:run") setIntensity(1.15);
      if (event.type === "chat:message") setIntensity(1.1);
      if (event.type === "voice:waveform") setIntensity(1.25);
      if (event.type === "system:health") {
        setIntensity(event.level === "warning" ? 0.9 : 1);
      }

      setTimeout(() => setIntensity(1), 600);
    });
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300"
      style={{
        transform: `scale(${intensity})`,
        filter: `drop-shadow(0 0 ${20 * intensity}px #00f6ff)`
      }}
    >
      <div className="w-[280px] h-[580px] bg-neon/30 blur-2xl animate-pulseVertical rounded-full" />
    </div>
  );
}
