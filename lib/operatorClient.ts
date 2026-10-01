const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://madison-backend.onrender.com";

export async function operator(mode: string, data: any = {}) {
  if (!API_URL || API_URL === "undefined") {
    console.error("NEXT_PUBLIC_BACKEND_URL is not configured");
    return { error: "Backend URL not configured" };
  }

  const payload = { mode, data };

  try {
    const res = await fetch(`${API_URL}/operator/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error(`Backend error: ${res.status}`);
      return { error: `Backend error: ${res.status}` };
    }

    return res.json();
  } catch (error) {
    console.error("Operator fetch error:", error);
    return { error: String(error) };
  }
}
