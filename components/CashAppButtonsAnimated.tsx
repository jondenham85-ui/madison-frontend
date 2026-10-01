"use client";

import { operator } from "@/lib/operatorClient";

async function logCashAppClick() {
  try {
    await operator("revenue", { daily: [5] });
  } catch (error) {
    console.error("Failed to log CashApp click:", error);
  }
}

export default function CashAppButtonsAnimated() {
  const handleClick = () => {
    void logCashAppClick();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-400"
    >
      Cash App
    </button>
  );
}
