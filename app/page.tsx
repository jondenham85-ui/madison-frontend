"use client";

import { useEffect, useState } from "react";
import HologramMadison from "@/components/HologramMadison";
import BootSequence from "@/components/BootSequence";
import ParticleField from "@/components/ParticleField";
import GridBackground from "@/components/GridBackground";

const navItems = [
  { label: "Madison", href: "#madison" },
  { label: "Chat", href: "#chat" },
  { label: "Automation", href: "#automation" },
  { label: "ShopMAD", href: "#shopmad" },
  { label: "Console", href: "#console" },
];

export default function Home() {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [bootComplete, setBootComplete] = useState(false);
  const [voicePlayed, setVoicePlayed] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) setTimeOfDay("Morning");
    else if (hours < 18) setTimeOfDay("Afternoon");
    else setTimeOfDay("Night");
  }, []);

  useEffect(() => {
    if (bootComplete && !voicePlayed && typeof window !== "undefined") {
      try {
        const utter = new SpeechSynthesisUtterance(
          `Good ${timeOfDay.toLowerCase()}, Jon. Madison online. Operator authenticated. Welcome back to the grid.`
        );
        utter.rate = 0.95;
        utter.pitch = 1.05;
        utter.volume = 1;
        window.speechSynthesis.speak(utter);
        setVoicePlayed(true);
      } catch {}
    }
  }, [bootComplete, timeOfDay, voicePlayed]);

  return (
    <main className="min-h-screen bg-mad-black text-mad-teal relative overflow-hidden">
      <GridBackground />
      <ParticleField />

      {!bootComplete && (
        <BootSequence
          onEnter={() => {
            setBootComplete(true);
          }}
        />
      )}

      <div
        className={`relative z-10 flex min-h-screen flex-col transition-opacity duration-700 ${
          bootComplete ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <header className="flex items-center justify-between px-6 pt-6 md:px-10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-mad-teal/20 border border-mad-teal/40 flex items-center justify-center mad-pulse">
              <span className="text-xs font-semibold tracking-[0.2em] text-mad-teal">
                MAD
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.25em] text-mad-teal/70">
                MAD Madison AI
              </span>
              <span className="text-[0.7rem] text-mad-muted">
                Unified operator • Holographic control surface
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-mad-muted">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-mad-teal transition-colors mad-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="mad-pill-button">
            <span className="mad-pill-glow" />
            <span className="relative z-10 text-[0.7rem] tracking-[0.2em] uppercase">
              Launch Madison
            </span>
          </button>
        </header>

        <section className="flex-1 px-6 pb-10 pt-10 md:px-10 md:pt-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-mad-teal/40 bg-mad-black/60 px-4 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-mad-teal/80 mad-chip">
                <span className="h-1.5 w-1.5 rounded-full bg-mad-teal mad-dot" />
                <span>Operator Online</span>
                <span className="text-mad-muted">• {timeOfDay} Session</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-mad-teal mad-hero-title">
                  Your holographic{" "}
                  <span className="mad-text-glow">Madison</span> control room.
                </h1>
                <p className="max-w-xl text-sm md:text-base text-mad-muted mad-hero-body">
                  MAD Madison AI is your unified operator—running chat, revenue
                  automations, ShopMAD, campaigns, and app builds from a single
                  holographic surface.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mad-status-grid">
                <div className="mad-card">
                  <div className="mad-card-header">
                    <span className="mad-card-dot" />
                    <span className="mad-card-title">Revenue Loop</span>
                  </div>
                  <p className="mad-card-body">
                    Morning summaries, weekly reports, and Alison’s daily feed.
                  </p>
                </div>

                <div className="mad-card">
                  <div className="mad-card-header">
                    <span className="mad-card-dot" />
                    <span className="mad-card-title">MADFaceShift</span>
                  </div>
                  <p className="mad-card-body">
                    Railway deployment live. Plug in Replicate, Redis, Neon,
                    and PayPal.
                  </p>
                </div>

                <div className="mad-card">
                  <div className="mad-card-header">
                    <span className="mad-card-dot" />
                    <span className="mad-card-title">Owner Lock</span>
                  </div>
                  <p className="mad-card-body">
                    Authentication bound to Jon + Alison.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 mad-action-row">
                <button className="mad-primary-button">
                  <span className="mad-primary-glow" />
                  <span className="relative z-10 text-[0.75rem] uppercase tracking-[0.2em]">
                    Open Madison Console
                  </span>
                </button>
                <button className="mad-secondary-button">
                  <span className="text-[0.7rem] uppercase tracking-[0.18em]">
                    Configure Revenue Automations
                  </span>
                </button>
                <button className="mad-secondary-button">
                  <span className="text-[0.7rem] uppercase tracking-[0.18em]">
                    Manage ShopMAD
                  </span>
                </button>
              </div>
            </div>

            <div id="madison" className="relative flex items-center justify-center mad-hologram-wrap">
              <HologramMadison timeOfDay={timeOfDay} />
            </div>
          </div>

          <section className="mt-12 grid gap-6 md:grid-cols-3 mad-section-grid">
            <div id="chat" className="mad-section-card">
              <div className="mad-section-header">
                <span className="mad-section-title">Madison Chat</span>
                <span className="mad-section-tag">Backend‑powered</span>
              </div>
              <p className="mad-section-body">
                Unified chat surface wired to backend routes.
              </p>
            </div>

            <div id="automation" className="mad-section-card">
              <div className="mad-section-header">
                <span className="mad-section-title">Automation Engine</span>
                <span className="mad-section-tag">Live</span>
              </div>
              <p className="mad-section-body">
                Revenue loops, notifications, operator updates.
              </p>
            </div>

            <div id="shopmad" className="mad-section-card">
              <div className="mad-section-header">
                <span className="mad-section-title">ShopMAD</span>
                <span className="mad-section-tag">Dynamic</span>
              </div>
              <p className="mad-section-body">
                Product system + admin panel ready for Cash App, Square, Stripe.
              </p>
            </div>
          </section>

          <section
            id="console"
            className="mt-10 rounded-2xl border border-mad-teal/30 bg-mad-black/70 px-5 py-4 mad-console"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="mad-console-dot" />
                <div className="flex flex-col">
                  <span className="text-[0.75rem] uppercase tracking-[0.2em] text-mad-teal">
                    Madison System Console
                  </span>
                  <span className="text-[0.7rem] text-mad-muted">
                    Frontend hologram ready. Backend connects when deployed.
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="mad-console-button">Deploy Backend</button>
                <button className="mad-console-button">Add API Keys</button>
                <button className="mad-console-button">Wire Voice Assistant</button>
              </div>
            </div>
          </section>
        </section>

        <footer className="px-6 pb-6 pt-4 md:px-10 text-[0.7rem] text-mad-muted flex items-center justify-between">
          <span>© {new Date().getFullYear()} MAD Madison AI • Jon & Alison</span>
          <span className="uppercase tracking-[0.2em]">
            Bundle ID: com.jondenham.madmadisonai
          </span>
        </footer>
      </div>
    </main>
  );
}

