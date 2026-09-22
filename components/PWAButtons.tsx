"use client";

import { useEffect, useState } from "react";

export default function PWAButtons() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showAndroidButton, setShowAndroidButton] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowAndroidButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installAndroid = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowAndroidButton(false);
    setSuccess(true);
  };

  const installIOS = () => {
    alert(
      "On iPhone:\n\n1. Tap Share in Safari\n2. Tap 'Add to Home Screen'\n3. MAD Madison installs instantly"
    );
    setSuccess(true);
  };

  return (
    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {showAndroidButton && (
        <button
          onClick={installAndroid}
          style={{
            background:
              "radial-gradient(circle at top, #00e6e6 0%, #004b4f 45%, #000000 100%)",
            color: "#000",
            padding: "16px 24px",
            borderRadius: "16px",
            fontSize: "18px",
            fontWeight: 700,
            width: "90%",
            maxWidth: "420px",
            border: "1px solid #00e6e6",
            boxShadow: "0 0 22px rgba(0, 230, 230, 0.8)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            animation: "madButtonPulse 2s infinite alternate",
          }}
        >
          Install MAD Madison (Android)
        </button>
      )}

      <button
        onClick={installIOS}
        style={{
          background:
            "linear-gradient(135deg, #0bbcc9 0%, #00e6e6 40%, #004b4f 100%)",
          color: "#ffffff",
          padding: "16px 24px",
          borderRadius: "16px",
          fontSize: "18px",
          fontWeight: 700,
          width: "90%",
          maxWidth: "420px",
          border: "1px solid rgba(0, 230, 230, 0.9)",
          boxShadow: "0 0 22px rgba(0, 230, 230, 0.9)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          animation: "madButtonPulse 2s infinite alternate",
        }}
      >
        Install on iPhone (Add to Home Screen)
      </button>

      {success && (
        <div
          style={{
            marginTop: "20px",
            padding: "14px 20px",
            background:
              "radial-gradient(circle, #00e6e6 0%, #004b4f 60%, #000000 100%)",
            borderRadius: "16px",
            boxShadow: "0 0 22px rgba(0, 230, 230, 0.9)",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          MAD Madison is now installed on your Home Screen.
        </div>
      )}
    </div>
  );
}
