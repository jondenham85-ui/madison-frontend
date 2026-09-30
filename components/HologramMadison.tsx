"use client";

import { useEffect, useState } from "react";

type Props = {
  speaking?: boolean;
};

export default function HologramMadison({ speaking = false }: Props) {
  const [intensity, setIntensity] = useState(0.3);

  useEffect(() => {
    setIntensity(speaking ? 1 : 0.3);
  }, [speaking]);

  return (
    <div className="relative w-64 h-64">
      <div
        className="absolute inset-0 rounded-full border border-teal-400 bg-gradient-to-tr from-black via-slate-900 to-teal-900/40"
        style={{
          boxShadow: `0 0 ${speaking ? 50 : 20}px rgba(45, 255, 255, ${
            speaking ? 0.9 : 0.4
          })`,
          transform: `scale(${speaking ? 1.05 : 1}) translateZ(0)`,
          transition: "all 200ms ease-out",
        }}
      />

      <div
        className="absolute inset-4 rounded-full border border-teal-300/60"
        style={{
          opacity: intensity,
          backdropFilter: "blur(8px)",
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute inset-x-8 top-10 h-1 bg-teal-400/40 blur-sm" />
        <div className="absolute inset-x-12 top-16 h-1 bg-teal-300/30 blur-sm" />
        <div className="absolute inset-x-16 top-22 h-1 bg-teal-200/20 blur-sm" />
      </div>

      <div className="absolute inset-0 animate-pulse opacity-30">
        <div className="w-full h-full rounded-full bg-teal-500/10 blur-3xl" />
      </div>
    </div>
  );
}
