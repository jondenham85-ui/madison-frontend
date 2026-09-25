"use client";

export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="mad-grid-overlay" />
      <div className="mad-grid-glow" />

      <div className="mad-grid-motion-layer mad-grid-motion-1" />
      <div className="mad-grid-motion-layer mad-grid-motion-2" />
      <div className="mad-grid-motion-layer mad-grid-motion-3" />

      <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-mad-teal/40 via-transparent to-transparent blur-3xl opacity-70" />
    </div>
  );
}
