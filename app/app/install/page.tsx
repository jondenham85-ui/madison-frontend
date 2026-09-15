export default function InstallPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-16">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Install MAD Madison AI</h1>
        <p className="text-slate-300 text-lg">
          Add Madison to your iPhone or Android home screen and keep your
          automation engine with you everywhere.
        </p>
      </section>

      {/* INSTALL OPTIONS */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* iPhone */}
        <div className="rounded-2xl border border-teal-500/60 bg-slate-900/70 p-8 shadow-xl shadow-teal-500/20">
          <h2 className="text-2xl font-semibold mb-3">Install on iPhone</h2>
          <p className="text-slate-300 mb-4">
            Madison installs instantly using Safari’s “Add to Home Screen”
            feature.
          </p>

          <ol className="text-slate-300 text-sm space-y-2 mb-6">
            <li>1. Open Madison on your iPhone</li>
            <li>2. Tap the Share icon</li>
            <li>3. Tap “Add to Home Screen”</li>
            <li>4. Tap “Add”</li>
          </ol>

          <a
            href="/install?device=iphone"
            className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition"
          >
            Open iPhone Install
          </a>
        </div>

        {/* Android */}
        <div className="rounded-2xl border border-teal-500/60 bg-slate-900/70 p-8 shadow-xl shadow-teal-500/20">
          <h2 className="text-2xl font-semibold mb-3">Install on Android</h2>
          <p className="text-slate-300 mb-4">
            Madison installs instantly using Chrome’s “Install App” button.
          </p>

          <ol className="text-slate-300 text-sm space-y-2 mb-6">
            <li>1. Open Madison on your Android</li>
            <li>2. Tap the “Install App” banner</li>
            <li>3. Confirm installation</li>
            <li>4. Madison appears on your home screen</li>
          </ol>

          <a
            href="/install?device=android"
            className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition"
          >
            Open Android Install
          </a>
        </div>
      </section>

      {/* OWNER INSTALL LINKS */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-4">Owner Install Links</h2>
        <p className="text-slate-300 mb-6">
          These links install Madison with full owner permissions for Jon and
          Alison.
        </p>

        <div className="space-y-4">
          <a
            href="https://mad-madison-ai-production.up.railway.app/install?owner=jon"
            className="block rounded-lg bg-slate-900 border border-teal-400 px-5 py-3 text-teal-300 hover:bg-slate-800 transition"
          >
            Install Madison — Jon (Owner)
          </a>

          <a
            href="https://mad-madison-ai-production.up.railway.app/install?owner=alison"
            className="block rounded-lg bg-slate-900 border border-teal-400 px-5 py-3 text-teal-300 hover:bg-slate-800 transition"
          >
            Install Madison — Alison (Co‑Owner)
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 mt-20 pt-10 text-center text-slate-500 text-sm">
        © MAD Madison AI — Jon & Alison Denham
      </footer>
    </main>
  );
}
