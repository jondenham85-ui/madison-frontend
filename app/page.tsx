export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO – MADISON HOLOGRAM OPERATOR */}
      <section className="relative w-full py-28 px-6 overflow-hidden">

        {/* Hologram background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,#00E5FF33,#000000)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,#00E5FF22_0%,transparent_40%,#00E5FF22_80%,transparent_100%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,#00E5FF11,transparent)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">

          {/* LEFT: Madison intro text */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-teal-300/70">
              MADISON AI OPERATOR
            </p>

            <h1 className="mt-3 text-6xl font-bold text-teal-200 drop-shadow-[0_0_30px_#00E5FF]">
              Your Holographic AI System.
            </h1>

            <p className="mt-5 text-xl text-gray-300 max-w-xl">
              Madison sits at the center of your automation universe — watching,
              analyzing, and executing tasks with futuristic precision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  px-10 py-4 rounded-xl font-semibold
                  bg-teal-400 text-black
                  hover:bg-teal-300 active:bg-teal-500
                  shadow-[0_0_30px_#00E5FF]
                "
              >
                Launch Madison
              </button>

              <button
                className="
                  px-10 py-4 rounded-xl font-semibold
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

          {/* RIGHT: Hologram Madison at futuristic desk */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-[22rem] md:h-[22rem]">

              {/* Hologram aura */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-[radial-gradient(circle,#00E5FF66,#000000)]
                  shadow-[0_0_55px_#00E5FF]
                  opacity-80
                "
              />

              {/* Madison hologram silhouette */}
              <div
                className="
                  absolute inset-8 rounded-full
                  border border-teal-300/70
                  bg-black/60
                  backdrop-blur-xl
                  flex items-center justify-center
                  animate-pulse
                "
              >
                <div className="w-28 h-28 rounded-full border border-teal-300/60 bg-gradient-to-b from-teal-300/60 to-black/80" />
              </div>

              {/* Futuristic rounded desk */}
              <div
                className="
                  absolute -bottom-14 left-1/2 -translate-x-1/2
                  w-72 h-24
                  rounded-full
                  bg-black/80
                  border border-teal-400/60
                  shadow-[0_0_45px_#00E5FF]
                  flex items-center justify-center
                "
              >
                <div className="w-60 h-12 rounded-full bg-gradient-to-r from-teal-400/40 via-black to-teal-400/40" />
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
                flex-1 px-4 py-
