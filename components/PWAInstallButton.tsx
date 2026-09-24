"use client";

import { useEffect, useState } from "react";

export default function PWAInstallButton() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = () => {
    if (!promptEvent) return;
    promptEvent.prompt();
    promptEvent.userChoice.then(() => setVisible(false));
  };

  if (!visible) return null;

  return (
    <button
      onClick={install}
      className="px-6 py-3 bg-dark border border-neon text-neon shadow-neonSoft hover:shadow-neon transition-all"
    >
      Install MAD Madison AI
    </button>
  );
}
