"use client";

import { useEffect, useState } from "react";

interface HologramMadisonProps {
  timeOfDay: string;
}

export default function HologramMadison({ timeOfDay }: HologramMadisonProps) {
  const [reactiveTilt, setReactiveTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setReactiveTilt({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="mad-hologram-shell"
      style={{
        transform: `rotateX(${reactiveTilt.y}deg) rotateY(${reactiveTilt.x}deg)`,
      }}
    >
      <div className="mad-orbit-ring mad-orbit-ring-outer" />
      <div className="mad-orbit-ring mad-orbit-ring-inner" />

      <div className="mad-operator-shell">
        <div className="mad-operator-glass mad-hologram-flicker">
          <div className="mad-avatar mad-avatar-silhouette">
            <div className="mad-avatar-head-silhouette" />
            <div className="mad-avatar-body-silhouette" />
            <div className="mad-avatar-shoulders" />
            <div className="mad-avatar-lines mad-avatar-lines-1" />
            <div className="mad-avatar-lines mad-avatar-lines-2" />
          </div>

          <div className="mad-hud-top">
            <span className="mad-hud-label">MADISON OPERATOR</span>
            <span className="mad-hud-sub">Session: {timeOfDay}</span>
          </div>

          <div className="mad-hud-bottom">
            <div className="mad-hud-pill">
              <span className="mad-hud-dot" />
              <span className="mad-hud-text">Chat Engine Online</span>
            </div>
            <div className="mad-hud-pill">
              <span className="mad-hud-dot" />
              <span className="mad-hud-text">Voice Route Pending</span>
            </div>
            <div className="mad-hud-pill">
              <span className="mad-hud-dot" />
              <span className="mad-hud-text">ShopMAD Linked</span>
            </div>
          </div>
        </div>

        <div className="mad-side-strip">
          <span className="mad-side-label">SYSTEM BUNDLE</span>
          <span className="mad-side-value">61 FILES • PROD READY</span>
          <span className="mad-side-label mt-3">BACKEND</span>
          <span className="mad-side-value">
            mad-madison-ai-production.up.railway.app
          </span>
        </div>
      </div>
    </div>
  );
}
