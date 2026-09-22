"use client";

import { useEffect, useState } from "react";

export default function PWABanner() {
  const [isStandalone, setIsStandalone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);
  }, []);

  if (!visible || isStandalone) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background:
          "radial-gradient(circle at top, #00e6e6 0%, #000000 55%, #001b1f 100%)",
        color: "#ffffff",
        padding: "12px 18px",
        borderRadius: "18px",
        boxShadow: "0 0 25px rgba(0, 230, 230, 0.7)",
        border: "1px solid rgba(0, 230, 230, 0.8)",
        fontSize: "14px",
        maxWidth: "420px",
        zIndex: 50,
        animation: "madGlow 2.5s infinite alternate",
      }}
    >
      <div style={{ marginBottom: "8px", fontWeight: 600 }}>
        Install MAD Madison to your Home Screen
      </div>
      <div style={{ fontSize: "13px", opacity: 0.85, marginBottom: "10px" }}>
        Android: tap the teal install button. iPhone: Share → Add to Home
        Screen.
      </div>
      <button
        onClick={() => setVisible(false)}
        style={{
          background: "transparent",
          border: "none",
          color: "#00e6e6",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
