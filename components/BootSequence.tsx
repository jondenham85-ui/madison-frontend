"use client";

import { useEffect, useState } from "react";

interface BootSequenceProps {
  onEnter: () => void;
}

export default function BootSequence({ onEnter }: BootSequenceProps) {
  const [phase, setPhase] = useState<"scan" | "ready">("scan");

  useEffect(() => {
    const t = setTimeout(() => setPhase("ready"), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-mad-black boot-overlay">
      <div className="boot-scanline" />
      <div className="boot-core">
        <div className="boot-logo">
          <span className="boot-logo-text">MAD</span>
        </div>

        <div className="boot-text-block">
          <span className="boot-title">MAD MADISON AI</span>
          <span className="boot-sub">Operator grid initialization</span>
        </div>

        <div className="boot-status">
          {phase === "scan" ? (
            <span className="boot-status-line">
              SCANNING • AUTHENTICATING OPERATOR…
            </span>
          ) : (
            <span className="boot-status-line">
              OPERATOR: JON • ACCESS GRANTED
            </span>
          )}
        </div>

        {phase === "ready" && (
          <button className="boot-enter-button" onClick={onEnter}>
            <span className="boot-enter-glow" />
            <span className="boot-enter-label">TAP TO ENTER THE GRID</span>
          </button>
        )}
      </div>
    </div>
  );
}
