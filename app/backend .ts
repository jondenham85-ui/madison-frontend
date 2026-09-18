// api/backend.ts
const API_BASE = "https://api.madmadisonai.com";

export async function backend(path: string, options: RequestInit = {}) {
  const url = `${API_BASE}${path}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    });

    if (!res.ok) {
      throw new Error(`Backend error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Backend request failed:", err);
    throw err;
  }
}
