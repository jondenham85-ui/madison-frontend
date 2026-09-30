"use client";

import { useEffect, useState } from "react";

export default function HologramMadison({ speaking = false, idle = false }) {
  const [intensity, setIntensity] = useState(0.3);

  useEffect(() => {
    if (speaking) {
      setIntensity(1);
    } else if (idle) {
      const pulse = setInterval(() => {
        setIntensity((prev) => (prev === 0.3 ? 0.5 : 0.3));
      }, 1500);
      return () => clearInterval(pulse);
    } else {
      setIntensity(0.3);
    }
  }, [speaking, idle]);

  return (
    <div className="relative w-64 h-64">
      <div
        className="absolute inset-0 rounded-full border border-teal-400 bg-gradient-to-tr from-black via-slate-900 to-teal-900/40"
        style={{
          boxShadow: `0 0 ${speaking ? 50 : 20}px rgba(45, 255, 255, ${
            speaking ? 0.9 : intensity
          })`,
          transform: `scale(${speaking ? 1.05 : 1})`,
          transition: "all 200ms ease-out",
        }}
      />

      <div className="absolute inset-0 animate-pulse opacity-30">
        <div className="w-full h-full rounded-full bg-teal-500/10 blur-3xl" />
      </div>
    </div>
  );
}
