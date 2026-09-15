export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-16">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Madison AI Pricing</h1>
        <p className="text-slate-300 text-lg">
          Simple, transparent pricing for the AI that runs your entire business.
        </p>
      </section>

      {/* PRICING CARD */}
      <section className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-teal-500/60 bg-slate-900/70 p-8 shadow-xl shadow-teal-500/20">
          <h2 className="text-3xl font-bold mb-2">Madison Pro</h2>
          <p className="text-slate-300 mb-6 text-lg">
            Full access to Madison’s automation engine — unlimited usage, owner‑only
            controls, and every integrated system.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* FEATURES */}
            <ul className="text-slate-300 text-sm space-y-2 flex-1">
              <li>• Unlimited Madison AI chat</li>
              <li>• Shopify Manager (orders, revenue, alerts)</li>
              <li>• YouTube Tools (scripts, thumbnails, analytics)</li>
              <li>• Social Hub (auto‑posting, scheduling)</li>
              <li>• App Builder Engine (generate micro‑apps)</li>
              <li>• Ad Campaign Engine (funnels + conversions)</li>
              <li>• Daily standups + weekly sprints</li>
              <li>• Morning updates + revenue reports</li>
              <li>• Owner‑only control panel</li>
            </ul>

            {/* PRICE */}
            <div className="text-center flex-1">
              <p className="text-5xl font-bold mb-2">$29</p>
              <p className="text-slate-400 mb-6">per month</p>

              <a
                href="/subscribe"
                className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition"
              >
                Start Subscription
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6 text-slate-300">
          <div>
            <h3 className="text-lg font-semibold mb-2">Is Madison unlimited?</h3>
            <p>Yes — Madison Pro gives you full, unlimited access to every engine.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
            <p>Absolutely. Your subscription is month‑to‑month with no contracts.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Does Madison work on mobile?</h3>
            <p>
              Yes — Madison installs directly on your iPhone or Android as a PWA,
              with native apps coming soon.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Do Jon & Alison control Madison?</h3>
            <p>
              Yes — Madison is owner‑locked. Only Jon and Alison have system‑level
              access.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 mt-20 pt-10 text-center text-slate-500 text-sm">
        © MAD Madison AI — Jon & Alison Denham
      </footer>
    </main>
  );
}
