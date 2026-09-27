const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_BACKEND_URL is missing in Vercel env.");
}

export async function sendChat(message: string) {
  const response = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Backend error: ${text}`);
  }

  return response.json();
}

export async function operator(command: string) {
  return sendChat(command);
}

export async function systemCheck() {
  return sendChat("operator run system-check");
}

export async function deployFullSystem() {
  return sendChat("deploy full-system");
}

export async function runCode(code: string) {
  return sendChat(`run ${code}`);
}
