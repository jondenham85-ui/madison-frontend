"use client";
const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "https://madison-backend.onrender.com";

import { useEffect, useState } from "react";
import HologramMadison from "@/components/HologramMadison";
import BootSequence from "@/components/BootSequence";
import ParticleField from "@/components/ParticleField";
import GridBackground from "@/components/GridBackground";
import MadisonChat from "@/components/MadisonChat";
import { operator, systemCheck, runCode } from "@/lib/madisonApi";

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://madison-backend-7lvr.onrender.com";

const navItems = [
  { label: "Madison", href: "#madison" },
  { label: "Chat", href: "#chat" },
  { label: "Automation", href: "#automation" },
  { label: "ShopMAD", href: "#shopmad" },
  { label: "Console", href: "#console" },
  { label: "Status", href: "#status" },
  { label: "Revenue", href: "#revenue" },
  { label: "MADFaceShift", href: "#madfaceshift" },
  { label: "Scheduler", href: "#scheduler" },
];
export default function Home() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [bootComplete, setBootComplete] = useState(false);
  const [voicePlayed, setVoicePlayed] = useState(false);

  // Operator Console
  const [operatorLog, setOperatorLog] = useState([]);
  const [operatorLoading, setOperatorLoading] = useState(false);

  // ShopMAD Live Grid
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  // ShopMAD Admin
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  // Revenue Dashboard
  const [revenueSummary, setRevenueSummary] = useState(null);
  const [revenueLoading, setRevenueLoading] = useState(false);

  // System Status Panel
  const [systemStatus, setSystemStatus] = useState(null);
  const [statusLoading, setStatusLoading] = useState(false);

  // Notifications Panel
  const [notifications, setNotifications] = useState([]);
  const [notificationsLoading, setNotificationsLoading] = useState(false);

  // Scheduler Panel
  const [schedulerMessage, setSchedulerMessage] = useState("");
  const [schedulerLoading, setSchedulerLoading] = useState(false);

  // MADFaceShift Engine Panel
  const [engineStatus, setEngineStatus] = useState(null);
  const [engineLoading, setEngineLoading] = useState(false);

  // Voice Command Operator
  const [voiceActive, setVoiceActive] = useState(false);
  const [lastVoiceCommand, setLastVoiceCommand] = useState("");

  // Hologram Response Animations
  const [hologramState, setHologramState] = useState("idle");

  // Operator Command Handler
  async function runOperatorCommand(cmd) {
    setOperatorLoading(true);
    setHologramState("thinking");

    try {
      const result = await operator(cmd);
      setOperatorLog((prev) => [
        ...prev,
        { type: "command", text: cmd },
        { type: "response", text: JSON.stringify(result, null, 2) },
      ]);
      setHologramState("responding");
    } catch (err) {
      setOperatorLog((prev) => [
        ...prev,
        { type: "error", text: err.message },
      ]);
      setHologramState("alert");
    }

    setOperatorLoading(false);
    setTimeout(() => setHologramState("idle"), 1200);
  }

  // System Check Handler
  async function runSystemCheck() {
    setOperatorLoading(true);
    setHologramState("thinking");

    try {
      const result = await systemCheck();
      setOperatorLog((prev) => [
        ...prev,
        { type: "command", text: "operator run system-check" },
        { type: "response", text: JSON.stringify(result, null, 2) },
      ]);
      setHologramState("responding");
    } catch (err) {
      setOperatorLog((prev) => [
        ...prev,
        { type: "error", text: err.message },
      ]);
      setHologramState("alert");
    }

    setOperatorLoading(false);
    setTimeout(() => setHologramState("idle"), 1200);
  }

  // Run Code Handler
  async function runOperatorCode() {
    setOperatorLoading(true);
    setHologramState("thinking");

    try {
      const result = await runCode("console.log('Madison online')");
      setOperatorLog((prev) => [
        ...prev,
        { type: "command", text: "run console.log('Madison online')" },
        { type: "response", text: JSON.stringify(result, null, 2) },
      ]);
      setHologramState("responding");
    } catch (err) {
      setOperatorLog((prev) => [
        ...prev,
        { type: "error", text: err.message },
      ]);
      setHologramState("alert");
    }

    setOperatorLoading(false);
    setTimeout(() => setHologramState("idle"), 1200);
  }
  // Time of day greeting
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) setTimeOfDay("Morning");
    else if (hours < 18) setTimeOfDay("Afternoon");
    else setTimeOfDay("Night");
  }, []);

  // Voice greeting after boot
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
const loadProducts = async () => {
  try {
    const res = await fetch(`${backend}/products`);
    const data = await res.json();
    setProducts(data);
  } catch (err) {
    console.error("Failed to load products:", err);
  }
};


  // Initial data loads after boot
  useEffect(() => {
    if (!bootComplete) return;
    loadProducts();
    loadRevenue();
    loadSystemStatus();
    loadNotifications();
    loadEngineStatus();
  }, [bootComplete]);

  return (
    <main className="min-h-screen bg-mad-black text-mad-teal relative overflow-hidden">
      <GridBackground />
      <ParticleField />

      {!bootComplete && (
        <BootSequence onEnter={() => setBootComplete(true)} />
      )}

      <div
        className={`relative z-10 flex min-h-screen flex-col transition-opacity duration-700 ${
          bootComplete ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* HEADER */}
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

        {/* MAIN CONTENT */}
        <section className="flex-1 px-6 pb-10 pt-10 md:px-10 md:pt-14">

          {/* HERO + HOLOGRAM */}
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

            <div
              id="madison"
              className={`relative flex items-center justify-center mad-hologram-wrap ${
                hologramState === "thinking"
                  ? "mad-hologram-thinking"
                  : hologramState === "responding"
                  ? "mad-hologram-responding"
                  : hologramState === "alert"
                  ? "mad-hologram-alert"
                  : "mad-hologram-idle"
              }`}
            >
              <HologramMadison timeOfDay={timeOfDay} />
            </div>
          </div>

          {/* CHAT + AUTOMATION + SHOPMAD */}
          <section className="mt-12 grid gap-6 md:grid-cols-3 mad-section-grid">
            <div id="chat" className="mad-section-card p-4">
              <MadisonChat />
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
          {/* OPERATOR CONSOLE */}
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
                    Frontend hologram ready. Backend connected.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  className="mad-console-button"
                  onClick={() => runOperatorCommand("deploy full-system")}
                >
                  Deploy Backend
                </button>

                <button className="mad-console-button" onClick={runSystemCheck}>
                  System Check
                </button>

                <button className="mad-console-button" onClick={runOperatorCode}>
                  Run Code
                </button>

                <button
                  className={`mad-console-button ${
                    voiceActive ? "opacity-70" : ""
                  }`}
                  onClick={startVoice}
                >
                  Voice Command
                </button>
              </div>
            </div>

            {/* LAST VOICE COMMAND */}
            <div className="mt-3 text-[0.7rem] text-mad-muted">
              Last voice command:{" "}
              <span className="text-mad-teal">{lastVoiceCommand || "None"}</span>
            </div>

            {/* OPERATOR LOG VIEWER */}
            <div className="mt-6 bg-mad-black/60 border border-mad-teal/30 rounded-xl p-4 h-64 overflow-y-auto">
              <h3 className="text-xs uppercase tracking-[0.2em] text-mad-teal mb-3">
                Operator Log
              </h3>

              {operatorLog.map((entry, i) => (
                <div key={i} className="mb-3">
                  <strong
                    className={
                      entry.type === "command"
                        ? "text-mad-teal"
                        : entry.type === "error"
                        ? "text-red-400"
                        : "text-mad-muted"
                    }
                  >
                    {entry.type.toUpperCase()}:
                  </strong>
                  <pre className="whitespace-pre-wrap text-xs mt-1 text-mad-muted">
                    {entry.text}
                  </pre>
                </div>
              ))}

              {operatorLoading && (
                <div className="text-mad-muted text-xs">Processing…</div>
              )}
            </div>
          </section>
          {/* SHOPMAD LIVE GRID */}
          <section className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">ShopMAD Live Grid</span>
              <span className="mad-section-tag">Products</span>
            </div>

            <div className="mt-4">
              {productsLoading ? (
                <div className="text-xs text-mad-muted">Loading products…</div>
              ) : products.length === 0 ? (
                <div className="text-xs text-mad-muted">
                  No products found. Use admin panel below.
                </div>
              ) : (
                <div className="grid gap-3 md:grid-cols-3">
                  {products.map((p) => (
                    <div
                      key={p.id || p._id || p.name}
                      className="border border-mad-teal/30 rounded-lg p-3 bg-mad-black/60"
                    >
                      <div className="text-xs uppercase tracking-[0.18em] text-mad-teal mb-1">
                        {p.name}
                      </div>
                      <div className="text-[0.75rem] text-mad-muted">
                        ${p.price?.toFixed?.(2) || p.price}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
          {/* SHOPMAD ADMIN */}
          <section className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">ShopMAD Admin</span>
              <span className="mad-section-tag">Control</span>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-[0.7rem] text-mad-muted">Add Product</div>

                <input
                  className="bg-mad-black/60 border border-mad-teal/30 rounded-lg px-2 py-1 text-xs text-mad-teal"
                  placeholder="Name"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                />

                <input
                  className="bg-mad-black/60 border border-mad-teal/30 rounded-lg px-2 py-1 text-xs text-mad-teal"
                  placeholder="Price"
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                />

                <button className="mad-console-button" onClick={addProduct}>
                  Save Product
                </button>

                {adminMessage && (
                  <div className="text-[0.7rem] text-mad-muted">
                    {adminMessage}
                  </div>
                )}
              </div>

              <div className="text-[0.7rem] text-mad-muted md:col-span-2">
                Future: edit/delete products, inventory, pricing rules, bundles.
              </div>
            </div>
          </section>
          {/* SYSTEM STATUS */}
          <section id="status" className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">System Status</span>
              <span className="mad-section-tag">Grid</span>
            </div>

            <div className="mt-4">
              {statusLoading ? (
                <div className="text-xs text-mad-muted">Loading status…</div>
              ) : !systemStatus ? (
                <div className="text-xs text-mad-muted">
                  No status data available.
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-xs text-mad-muted bg-mad-black/60 border border-mad-teal/30 rounded-lg p-3">
                  {JSON.stringify(systemStatus, null, 2)}
                </pre>
              )}
            </div>
          </section>
          {/* REVENUE DASHBOARD */}
          <section id="revenue" className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">Revenue Dashboard</span>
              <span className="mad-section-tag">Loop</span>
            </div>

            <div className="mt-4">
              {revenueLoading ? (
                <div className="text-xs text-mad-muted">Loading revenue…</div>
              ) : !revenueSummary ? (
                <div className="text-xs text-mad-muted">
                  No revenue data available.
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-xs text-mad-muted bg-mad-black/60 border border-mad-teal/30 rounded-lg p-3">
                  {JSON.stringify(revenueSummary, null, 2)}
                </pre>
              )}
            </div>
          </section>
          {/* REVENUE DASHBOARD */}
          <section id="revenue" className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">Revenue Dashboard</span>
              <span className="mad-section-tag">Loop</span>
            </div>

            <div className="mt-4">
              {revenueLoading ? (
                <div className="text-xs text-mad-muted">Loading revenue…</div>
              ) : !revenueSummary ? (
                <div className="text-xs text-mad-muted">
                  No revenue data available.
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-xs text-mad-muted bg-mad-black/60 border border-mad-teal/30 rounded-lg p-3">
                  {JSON.stringify(revenueSummary, null, 2)}
                </pre>
              )}
            </div>
          </section>
          {/* MAD NOTIFICATIONS */}
          <section className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">MAD Notifications</span>
              <span className="mad-section-tag">Feed</span>
            </div>

            <div className="mt-4">
              {notificationsLoading ? (
                <div className="text-xs text-mad-muted">
                  Loading notifications…
                </div>
              ) : notifications.length === 0 ? (
                <div className="text-xs text-mad-muted">
                  No notifications at the moment.
                </div>
              ) : (
                <div className="space-y-2">
                  {notifications.map((n, i) => (
                    <div
                      key={i}
                      className="bg-mad-black/60 border border-mad-teal/30 rounded-lg px-3 py-2 text-[0.75rem] text-mad-muted"
                    >
                      {n.message || JSON.stringify(n)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
          {/* SCHEDULER */}
          <section id="scheduler" className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">MAD Scheduler</span>
              <span className="mad-section-tag">Loops</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                className="mad-console-button text-[0.7rem]"
                onClick={() => scheduleLoop("daily-revenue")}
              >
                Daily Revenue Summary
              </button>

              <button
                className="mad-console-button text-[0.7rem]"
                onClick={() => scheduleLoop("weekly-report")}
              >
                Weekly Report
              </button>

              <button
                className="mad-console-button text-[0.7rem]"
                onClick={() => scheduleLoop("system-check")}
              >
                Auto System Check
              </button>
            </div>

            <div className="mt-2 text-[0.7rem] text-mad-muted">
              {schedulerLoading
                ? "Scheduling…"
                : schedulerMessage || "Configure automated loops for Madison."}
            </div>
          </section>
          {/* MADFACESHIFT ENGINE */}
          <section id="madfaceshift" className="mt-10 mad-section-card">
            <div className="mad-section-header">
              <span className="mad-section-title">MADFaceShift Engine</span>
              <span className="mad-section-tag">AI</span>
            </div>

            <div className="mt-4">
              {engineLoading ? (
                <div className="text-xs text-mad-muted">
                  Loading engine status…
                </div>
              ) : !engineStatus ? (
                <div className="text-xs text-mad-muted">
                  No engine status available.
                </div>
              ) : (
                <pre className="whitespace-pre-wrap text-xs text-mad-muted bg-mad-black/60 border border-mad-teal/30 rounded-lg p-3">
                  {JSON.stringify(engineStatus, null, 2)}
                </pre>
              )}
            </div>
          </section>
        </section>

        {/* FOOTER */}
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
  /* ---------------------------------------------
     PART 13 — MADISON INTERACTIVE HOLOGRAM ENGINE
  ----------------------------------------------*/

  useEffect(() => {
    const holo = document.getElementById("madison");
    if (!holo) return;

    // Cursor tilt
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * -20;

      holo.style.setProperty("--tilt-x", `${y}deg`);
      holo.style.setProperty("--tilt-y", `${x}deg`);

      holo.classList.add("mad-hologram-tilt");
    };

    // Scroll pulse
    const handleScroll = () => {
      holo.classList.add("mad-hologram-scroll");
      setTimeout(() => holo.classList.remove("mad-hologram-scroll"), 600);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Voice-reactive hologram breathing
  const triggerVoicePulse = () => {
    const holo = document.getElementById("madison");
    if (!holo) return;

    holo.classList.add("mad-hologram-voice");
    setTimeout(() => holo.classList.remove("mad-hologram-voice"), 300);
  };
  /* ---------------------------------------------
     PART 13B — MADISON VOICE COMMAND ENGINE
  ----------------------------------------------*/

  const runOperatorCommand = async (cmd: string) => {
    const normalized = cmd.toLowerCase();
    addLog("command", cmd);

    if (normalized.includes("deploy")) return deployBackend();
    if (normalized.includes("check")) return runSystemCheck();
    if (normalized.includes("revenue")) return scheduleLoop("daily-revenue");
    if (normalized.includes("weekly")) return scheduleLoop("weekly-report");
    if (normalized.includes("engine")) return loadEngineStatus();
    if (normalized.includes("products")) return loadProducts();
    if (normalized.includes("status")) return loadSystemStatus();
    if (normalized.includes("notifications")) return loadNotifications();

    addLog("error", `Unknown command: ${cmd}`);
  };

  const startVoice = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      triggerVoicePulse();
      runOperatorCommand(transcript);
    };

    recognition.start();
  };
  /* ---------------------------------------------
     PART 13C — OPERATOR KEYBOARD SHORTCUTS
  ----------------------------------------------*/

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "c") runOperatorCommand("open console");
      if (e.key === "r") runSystemCheck();
      if (e.key === "d") runOperatorCommand("deploy full-system");
      if (e.key === "v") startVoice();
      if (e.key === "s") scheduleLoop("daily-revenue");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  /* ---------------------------------------------
     PART 14 — MADISON OPERATOR TERMINAL MODE
  ----------------------------------------------*/

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

  const toggleTerminal = () => {
    setTerminalOpen((prev) => !prev);
  };
  const runTerminalCommand = async () => {
    if (!terminalInput.trim()) return;

    setTerminalHistory((prev) => [...prev, `> ${terminalInput}`]);

    await runOperatorCommand(terminalInput);

    setTerminalInput("");
  };
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "`") toggleTerminal(); // Toggle terminal
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
