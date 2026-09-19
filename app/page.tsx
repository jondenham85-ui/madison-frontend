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
    </main>
  );
}
