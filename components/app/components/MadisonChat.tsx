"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function MadisonChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome back, Jon. What do you want me to automate first — store, tasks, or revenue?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/madison-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
            newMessage,
          ],
        }),
      });

      const data = await res.json();

      const reply: Message = {
        role: "assistant",
        content: data.reply ?? "Madison is online but returned no message.",
      };

      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I hit an error trying to process that. Check your backend route.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div
      className="
        max-w-4xl mx-auto p-6 md:p-8 rounded-2xl
        bg-[#050505]/90 backdrop-blur-xl
        border border-teal-400/40
        shadow-[0_0_30px_#00E5FF55]
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-300">
          Madison Live Console
        </h2>
        <span className="text-xs px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 border border-teal-400/60">
          {loading ? "PROCESSING…" : "SYSTEM ONLINE"}
        </span>
      </div>

      {/* Chat window */}
      <div
        className="
          h-72 md:h-80 overflow-y-auto p-4 mb-6
          bg-black/70 rounded-xl
          border border-teal-500/30
        "
      >
        <div className="space-y-4 text-sm md:text-base">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                msg.role === "user" ? "justify-end" : ""
              }`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-teal-400/60 border border-teal-200/80" />
              )}

              <div
                className={`
                  max-w-[80%] px-4 py-3 rounded-2xl
                  ${
                    msg.role === "assistant"
                      ? "bg-teal-400/10 border border-teal-300/60 text-teal-100"
                      : "bg-teal-400 text-black shadow-[0_0_20px_#00E5FF]"
                  }
                `}
              >
                <span
                  className={`block text-xs font-semibold mb-1 ${
                    msg.role === "assistant"
                      ? "text-teal-200/80"
                      : "text-black/70"
                  }`}
                >
                  {msg.role === "assistant" ? "Madison" : "You"}
                </span>
                <span>{msg.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Type a command for Madison..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="
            flex-1 px-4 py-3 rounded-xl bg-black/80 text-white
            border border-teal-400/50
            focus:outline-none focus:border-teal-300
            shadow-[0_0_15px_#00E5FF55]
          "
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-6 md:px-8 py-3 rounded-xl
            bg-teal-400 text-black font-semibold
            hover:bg-teal-300 active:bg-teal-500
            shadow-[0_0_25px_#00E5FF]
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {loading ? "Sending…" : "Send"}
        </button>
      </div>
    </div>
  );
}
