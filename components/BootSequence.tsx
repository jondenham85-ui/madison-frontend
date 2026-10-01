"use client";

import { operator } from "@/lib/operatorClient";

async function initMadison() {
  try {
    await operator("tier", { revenue: 0 });
  } catch (error) {
    console.error("Failed to initialize Madison:", error);
  }
}

export default function BootSequence() {
  return (
    <div className="text-neon text-sm">
      {/* Boot sequence initialization happens on mount */}
    </div>
  );
}
