"use client";

const particles = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  delay: Math.random() * 10,
  duration: 12 + Math.random() * 10,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 2 + Math.random() * 3,
}));

export default function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 mad-particle-field">
      {particles.map((p) => (
        <div
          key={p.id}
          className="mad-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
