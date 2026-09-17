import { getBackendHealth, getDiagnostic, getOwnerStatus } from "@/api/backend";

export default async function Page() {
  const health = await getBackendHealth();
  const diagnostic = await getDiagnostic();
  const owner = await getOwnerStatus();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>MAD Madison System Status</h1>

      <section>
        <h2>Backend Health</h2>
        <pre>{JSON.stringify(health, null, 2)}</pre>
      </section>

      <section>
        <h2>System Diagnostic</h2>
        <pre>{JSON.stringify(diagnostic, null, 2)}</pre>
      </section>

      <section>
        <h2>Owner Status</h2>
        <pre>{JSON.stringify(owner, null, 2)}</pre>
      </section>
    </main>
  );
}
