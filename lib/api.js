const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function madisonOperator(mode, data = {}) {
  const payload = { mode, data };

  const res = await fetch(`${API_URL}/operator/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`Backend error: ${res.status}`);
  }

  return res.json();
}
