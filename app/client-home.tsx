async function getBackendStatus() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/health`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed");

    const data = await res.json();
    return { ok: true, message: data.message };
  } catch {
    return { ok: false, message: "Load failed" };
  }
}
