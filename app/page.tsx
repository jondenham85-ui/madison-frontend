export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO – MADISON HOLOGRAM OPERATOR */}
      <section className="relative w-full py-24 px-6 overflow-hidden">
        {/* Hologram background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,#00E5FF33,#000000)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,#00E5FF22_0%,transparent_40%,#00E5FF22_80%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          {/* Left: Text + CTA */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-teal-300/70">
              MadMadisonAI Platform
            </p>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-teal-200 drop-shadow-[0_0_25px_#00E5FF]">
              Your Holographic AI Operator.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Madison runs your automation, your store, and your systems like a
              futuristic COO—always on, always watching, always executing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="
                  px-8 py-3 rounded-xl font-semibold
                  bg-teal-400 text-black
                  hover:bg-teal-300 active:bg-teal-500
                  shadow-[0_0_25px_#00E5FF]
                "
              >
                Launch Madison
              </button>
              <button
                className="
                  px-8 py-3 rounded-xl font-semibold
                  border border-teal-400/60
                  text-teal-200
                  bg-black/40
                  hover:bg-teal-400/10
                "
              >
                View Control Room
              </button>
            </div>
          </div>

          {/* Right: Hologram Madison at desk (stylized) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Hologram aura */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-[radial-gradient(circle,#00E5FF66,#000000)]
                  shadow-[0_0_45px_#00E5FF]
                  opacity-80
                "
              />
              {/* Silhouette / avatar placeholder */}
              <div
                className="
                  absolute inset-6 rounded-full
                  border border-teal-300/70
                  bg-black/60
                  backdrop-blur-xl
                  flex items-center justify-center
                "
              >
                <div className="w-24 h-24 rounded-full border border-teal-300/60 bg-gradient-to-b from-teal-300/60 to-black/80" />
              </div>
              {/* Rounded desk */}
              <div
                className="
                  absolute -bottom-10 left-1/2 -translate-x-1/2
                  w-64 h-20
                  rounded-full
                  bg-black/80
                  border border-teal-400/60
                  shadow-[0_0_35px_#00E5FF]
                  flex items-center justify-center
                "
              >
                <div className="w-52 h-10 rounded-full bg-gradient-to-r from-teal-400/40 via-black to-teal-400/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MADISON CHAT PANEL */}
      <section className="px-6 py-16">
        <div
          className="
            max-w-4xl mx-auto p-6 md:p-8 rounded-2xl
            bg-[#050505]/90 backdrop-blur-xl
            border border-teal-400/40
            shadow-[0_0_30px_#00E5FF55]
          "
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-300">
              Madison Live Console
            </h2>
            <span className="text-xs px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 border border-teal-400/60">
              SYSTEM ONLINE
            </span>
          </div>

          {/* Chat window */}
          <div
            className="
              h-72 md:h-80 overflow-y-auto p-4 mb-6
              bg-black/70 rounded-xl
              border border-teal-500/30
            "
          >
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-400/60 border border-teal-200/80" />
                <div
                  className="
                    max-w-[80%] px-4 py-3 rounded-2xl
                    bg-teal-400/10 border border-teal-300/60
                    text-teal-100
                  "
                >
                  <span className="block text-xs font-semibold text-teal-200/80 mb-1">
                    Madison
                  </span>
                  <span>
                    Welcome back, Jon. What do you want me to automate first—
                    store, tasks, or revenue?
                  </span>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div
                  className="
                    max-w-[80%] px-4 py-3 rounded-2xl
                    bg-teal-400 text-black
                    shadow-[0_0_20px_#00E5FF]
                  "
                >
                  <span className="block text-xs font-semibold text-black/70 mb-1">
                    You
                  </span>
                  <span>Show me everything that’s running right now.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-400/60 border border-teal-200/80" />
                <div
                  className="
                    max-w-[80%] px-4 py-3 rounded-2xl
                    bg-teal-400/10 border border-teal-300/60
                    text-teal-100
                  "
                >
                  <span className="block text-xs font-semibold text-teal-200/80 mb-1">
                    Madison
                  </span>
                  <span>
                    I’m monitoring orders, tasks, and automation flows. Your
                    Shopify pipeline is stable. Do you want me to push a new
                    routine or optimize an existing one?
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type a command for Madison..."
              className="
                flex-1 px-4 py-3 rounded-xl bg-black/80 text-white
                border border-teal-400/50
                focus:outline-none focus:border-teal-300
                shadow-[0_0_15px_#00E5FF55]
              "
            />
            <button
              className="
                px-6 md:px-8 py-3 rounded-xl
                bg-teal-400 text-black font-semibold
                hover:bg-teal-300 active:bg-teal-500
                shadow-[0_0_25px_#00E5FF]
              "
            >
              Send
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE GRID – MADISON AUTOMATION ENGINE */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-200 mb-6">
            Madison Automation Engine
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl">
            Every part of your system—chat, store, tasks, and revenue—is wired
            into Madison. This isn’t a landing page. It’s your control room.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Chat Brain",
                body: "Command‑driven operations. Madison executes tasks, not just answers questions.",
              },
              {
                title: "Shopify Manager",
                body: "Orders, products, and revenue monitored and optimized in real time.",
              },
              {
                title: "Automation Flows",
                body: "Trigger sequences, routines, and workflows with a single message.",
              },
              {
                title: "Task Execution",
                body: "Assign, track, and complete tasks through natural language.",
              },
              {
                title: "Revenue Intelligence",
                body: "See what’s working, what’s failing, and what Madison is fixing.",
              },
              {
                title: "Owner‑Level Control",
                body: "Jon + Alison access panel for deep system overrides and tuning.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="
                  p-6 rounded-2xl
                  bg-[#050505]/90
                  border border-teal-400/40
                  shadow-[0_0_25px_#00E5FF33]
                  hover:border-teal-300/80 hover:shadow-[0_0_35px_#00E5FF66]
                  transition
                "
              >
                <h3 className="text-lg font-semibold text-teal-200 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-teal-400/30 bg-black/95">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2026 MadMadisonAI — Madison Automation Engine
          </p>
          <p className="text-xs text-teal-300">
            Built for Jon Denham — not a template, a platform.
          </p>
        </div>
      </footer>
    </main>
  );
}
