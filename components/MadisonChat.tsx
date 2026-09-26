"use client";

import { useState } from "react";

export default function MadisonChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMsg = { role: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const madisonMsg = {
        role: "madison",
        text: JSON.stringify(data.result, null, 2),
      };

      setMessages((prev) => [...prev, madisonMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "madison", text: "Error connecting to backend." },
      ]);
    }

    setMessage("");
    setLoading(false);
  }

  return (
    <div className="mad-chat-wrap border border-mad-teal/40 bg-mad-black/70 rounded-2xl p-4">
      <h2 className="text-mad-teal uppercase tracking-[0.2em] text-sm mb-3">
        Madison Chat • Operator Surface
      </h2>

      <div className="mad-chat-window bg-mad-black/60 border border-mad-teal/30 rounded-xl p-3 h-64 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-3 ${
              m.role === "user" ? "text-mad-teal" : "text-mad-muted"
            }`}
          >
            <strong>{m.role === "user" ? "You" : "Madison"}:</strong>
            <pre className="whitespace-pre-wrap text-xs mt-1">
              {m.text}
            </pre>
          </div>
        ))}

        {loading && (
          <div className="text-mad-muted text-xs">Madison is thinking…</div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a command…"
          className="flex-1 bg-mad-black/50 border border-mad-teal/30 rounded-lg px-3 py-2 text-mad-teal text-sm"
        />
        <button
          onClick={sendMessage}
          className="mad-primary-button px-4 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Send
        </button>
      </div>
    </div>
  );
}
