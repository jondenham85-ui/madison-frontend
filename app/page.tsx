export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="px-6 py-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-teal-300 text-sm mb-2">
            Family‑Owned AI Empire — Jon & Alison Denham
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mad Madison AI — Your Intelligent Automation System
          </h1>

          <p className="text-slate-300 mb-6">
            The southern‑voiced Alison‑styled AI that runs your business, your
            store, your content, your funnels, and your revenue.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/app"
              className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition"
            >
              Launch Madison
            </a>

            <a
              href="/install"
              className="inline-flex items-center justify-center rounded-lg border border-teal-400 px-5 py-2.5 text-sm font-semibold text-teal-300 hover:bg-teal-900/40 transition"
            >
              Download Mobile App
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-500 shadow-[0_0_60px_rgba(45,212,191,0.7)] flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-slate-950/70 border border-teal-200/60 flex items-center justify-center text-center px-4">
              <p className="text-sm text-teal-100">
                Madison, your Alison‑styled AI COO, always on, always automating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 py-3">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-slate-950">
          <span>MAD Madison AI</span>
          <span>Teal/Turquoise + Neon Hologram Identity</span>
          <span>Powered by Next.js 14 + Madison Automation Engine</span>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">What Madison Runs For You</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Chat Brain",
              desc: "Execute tasks, automate workflows, and run your business with natural conversation.",
            },
            {
              title: "Shopify Manager",
              desc: "Orders, revenue, products, alerts — Madison keeps your store moving.",
            },
            {
              title: "YouTube Tools",
              desc: "Scripts, thumbnails, analytics, and viral optimization for your channel.",
            },
            {
              title: "Social Hub",
              desc: "Auto‑posting, scheduling, and viral loops across your social platforms.",
            },
            {
              title: "App Builder Engine",
              desc: "Generate micro‑apps and internal tools to expand your ecosystem.",
            },
            {
              title: "Ad Campaign Engine",
              desc: "Funnels, ads, and conversion cycles built and optimized automatically.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-teal-400/70 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTOMATION ENGINE */}
      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Madison Automation Engine</h2>

        <p className="text-slate-300 mb-6">
          Madison’s core engines run continuously to keep your business growing.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold mb-2">Backend Status</h3>
            <p className="text-sm text-slate-300">
              Madison backend is <span className="text-teal-300">live</span>.
              <br />
              Owner: Jon & Ally
              <br />
              System: MAD Madison AI
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold mb-2">Active Engines</h3>

            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Owner Engine</li>
              <li>• Revenue Engine</li>
              <li>• Content Engine</li>
              <li>• Traffic Engine</li>
              <li>• Funnel Engine</li>
              <li>• Scaling Engine</li>
            </ul>

            <p className="text-xs text-slate-400 mt-3">
              Uptime: live | Version: 1.6.0
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold mb-2">Madison Agile Automation</h3>

            <p className="text-sm text-slate-300">
              Madison automates your entire workflow:
            </p>

            <ul className="text-sm text-slate-300 mt-2 space-y-1">
              <li>• Weekly sprint creation</li>
              <li>• Daily standups</li>
              <li>• Automated tasks & reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Pricing</h2>

        <div className="rounded-2xl border border-teal-500/60 bg-slate-900/70 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Madison Pro</h3>

            <p className="text-sm text-slate-300 mb-3">
              Everything Madison offers, unlocked. Unlimited automation, owner‑only
              controls, and full access to all engines.
            </p>

            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Shopify, YouTube, Social, Funnels, App Builder</li>
              <li>• Daily standups & weekly sprints</li>
              <li>• Morning updates & revenue reports</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold mb-1">$29</p>
            <p className="text-sm text-slate-400 mb-4">per month</p>

            <a
              href="/subscribe"
              className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition"
            >
              Start Subscription
            </a>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="px-6 py-14 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Install Madison</h2>

        <p className="text-slate-300 mb-6">
          Use Madison anywhere — install her on your phone and keep your automation
          engine in your pocket.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/install/ios"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-teal-300 border border-teal-400 hover:bg-slate-800 transition"
          >
            Install on iPhone (PWA)
          </a>

          <a
            href="/install/android"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-teal-300 border border-teal-400 hover:bg-slate-800 transition"
          >
            Install on Android (PWA)
          </a>
        </div>

        <p className="text-xs text-slate-500 mt-3">
          Full native apps coming to App Store and Play Store.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 mt-10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap gap-3">
            <a href="/" className="hover:text-teal-300">
              Home
            </a>
            <a href="/app" className="hover:text-teal-300">
              Launch Madison
            </a>
            <a href="/pricing" className="hover:text-teal-300">
              Pricing
            </a>
            <a href="/support" className="hover:text-teal-300">
              Support
            </a>
            <a href="/privacy" className="hover:text-teal-300">
              Privacy
            </a>
            <a href="/terms" className="hover:text-teal-300">
              Terms
            </a>
            <a href="/contact" className="hover:text-teal-300">
              Contact
            </a>
          </div>

          <p>© MAD Madison AI — Jon & Alison Denham</p>
        </div>
      </footer>
    </main>
  );
}
