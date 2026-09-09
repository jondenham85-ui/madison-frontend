"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPhone|iPad|iPod/.test(ua);
    setIsIOS(ios);

    const installed =
      window.matchMedia("(display-mode: standalone)").matches ||
      navigator.standalone === true;
    setIsInstalled(installed);

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      console.log("PWA installed");
    }
    setDeferredPrompt(null);
  };

  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        MAD Madison AI
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Your autonomous AI engine — now installable on iPhone & Android.
      </p>

      {!isInstalled && !isIOS && deferredPrompt && (
        <button
          onClick={installApp}
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            backgroundColor: "#00C4B4",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Install MAD Madison AI
        </button>
      )}

      {isIOS && !isInstalled && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>Install on iPhone</h3>
          <p>1. Tap the Share icon in Safari</p>
          <p>2. Tap “Add to Home Screen”</p>
          <p>3. Open Madison from your home screen</p>
        </div>
      )}

      {isInstalled && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Madison is already installed ✔
        </p>
      )}
    </main>
  );
}

