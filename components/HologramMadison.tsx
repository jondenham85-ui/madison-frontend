"use client";

import { useEffect, useState } from "react";

export default function HologramMadison({ speaking = false }) {
  const [intensity, setIntensity] = useState(0.3);

  useEffect(() => {
    setIntensity(speaking ? 1 : 0.3);
  }, [speaking]);

  return (
    <div
      className="relative w-64 h-64 rounded-full border border-teal-400 bg-black/60"
      style={{
        boxShadow: `0 0 ${speaking ? 40 : 10}px rgba(45, 255, 255, ${
          speaking ? 0.9 : 0.4
        })`,
        transform: `scale(${speaking ? 1.05 : 1})`,
        transition: "all 200ms ease-out",
      }}
    >
      <div className="absolute inset-0 animate-pulse opacity-40" />
    </div>
  );
}
