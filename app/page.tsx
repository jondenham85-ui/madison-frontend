"use client";

import { useEffect, useState } from "react";
import HolographicOperator from "@/components/HolographicOperator";
import PWABanner from "@/components/PWABanner";
import PWAButtons from "@/components/PWAButtons";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Fake loading + splash timing
    setTimeout(() => setLoading(false), 1500);
    setTimeout(() => setShowSplash(false), 2500);

    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          height: "100vh",
          background:
            "radial-gradient(circle at top, #00e6e6 0%, #000000 60%, #000000 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00e6e6",
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          animation: "madSplashFade 1.5s ease-out",
        }}
      >
        MAD MADISON AI
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#00e6e6",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "4px solid rgba(0,230,230,0.4)",
            borderTopColor: "#00e6e6",
            animation: "madSpinner 1s linear infinite",
          }}
        />
        <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.8 }}>
          Loading MAD Madison…
        </p>
      </div>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #00e6e6 0%, #000000 55%, #000000 100%)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 16px 80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <PWABanner />

      <section
        style={{
          maxWidth: "720px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          MAD MADISON AI
        </h1>
        <p
          style={{
            fontSize: "15px",
            opacity: 0.85,
            marginBottom: "24px",
          }}
        >
          Unified black + teal holographic operator. Install MAD Madison
          directly to your Home Screen—no stores, no friction.
        </p>
      </section>

      <HolographicOperator />
      <PWAButtons />
    </main>
  );
}
