"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // PWA install prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showAndroidButton, setShowAndroidButton] = useState(false);
  const [success, setSuccess] = useState(false);

  // Detect standalone mode for banner
  const [isStandalone, setIsStandalone] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }

    // Android install prompt
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowAndroidButton(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // Detect standalone mode
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

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
      }}
    >
      {/* PWA Banner */}
      {!isStandalone && bannerVisible && (
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
            Android: tap the teal install button.  
            iPhone: Share → Add to Home Screen.
          </div>
          <button
            onClick={() => setBannerVisible(false)}
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
      )}

      {/* Title */}
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
          Unified black + teal holographic operator.  
          Install MAD Madison directly to your Home Screen—no stores.
        </p>
      </section>

      {/* Holographic Operator */}
      <div
        style={{
          marginTop: "32px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at top, rgba(0,230,230,0.9) 0%, #001b1f 45%, #000000 100%)",
          boxShadow: "0 0 40px rgba(0,230,230,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          animation: "madOrbFloat 4s infinite alternate",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            border: "1px solid rgba(0,230,230,0.7)",
            boxShadow: "0 0 25px rgba(0,230,230,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          MAD  
          <br />
          OPERATOR
        </div>
      </div>

      {/* PWA Buttons */}
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

      {/* Animations */}
      <style>{`
        @keyframes madGlow {
          0% { box-shadow: 0 0 10px rgba(0, 230, 230, 0.4); transform: translateX(-50%) translateY(0); }
          100% { box-shadow: 0 0 30px rgba(0, 230, 230, 0.9); transform: translateX(-50%) translateY(-2px); }
        }

        @keyframes madButtonPulse {
          0% { transform: scale(1); box-shadow: 0 0 12px rgba(0, 230, 230, 0.5); }
          100% { transform: scale(1.03); box-shadow: 0 0 26px rgba(0, 230, 230, 1); }
        }

        @keyframes madOrbFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px); }
        }
      `}</style>
    </main>
  );
}
