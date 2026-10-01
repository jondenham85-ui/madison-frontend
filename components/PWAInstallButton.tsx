"use client";

import { useEffect, useState } from "react";
import { operator } from "@/lib/operatorClient";

async function trackInstall() {
  try {
    await operator("product", { products: [] });
  } catch (error) {
    console.error("Failed to track PWA install:", error);
  }
}

export default function PWAInstallButton() {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = () => {
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    await trackInstall();
  };

  if (!canInstall) return null;

  return (
    <button
      onClick={handleInstall}
      className="px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-400"
    >
      Install App
    </button>
  );
}
