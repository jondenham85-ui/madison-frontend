import { NextRequest, NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type ChatRequestBody = {
  messages: ChatMessage[];
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatRequestBody;

    const lastUserMessage = body.messages
      .slice()
      .reverse()
      .find((m) => m.role === "user")?.content ?? "";

    // Simple rule-based Madison response for now
    const reply = buildMadisonReply(lastUserMessage);

    return NextResponse.json(
      {
        reply,
        madisonStatus: "ONLINE",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Madison chat error:", err);
    return NextResponse.json(
      {
        error: "Madison encountered an error processing this request.",
      },
      { status: 500 }
    );
  }
}

function buildMadisonReply(input: string): string {
  const lower = input.toLowerCase();

  if (!input.trim()) {
    return "You didn’t give me a command. Tell me what you want: store, tasks, or revenue.";
  }

  if (lower.includes("store") || lower.includes("shopify")) {
    return "I’ll treat this as a store command. In a real deployment, I’d connect to your Shopify API and return live order and product data.";
  }

  if (lower.includes("task")) || lower.includes("todo") || lower.includes("list")) {
    return "I’ll treat this as a task command. In production, I’d push this into your task system and track completion.";
  }

  if (lower.includes("revenue") || lower.includes("sales") || lower.includes("money")) {
    return "I’ll treat this as a revenue command. With full integration, I’d pull live revenue metrics and highlight what’s working and failing.";
  }

  if (lower.includes("status") || lower.includes("running")) {
    return "System check: I’m online and ready. Once wired to your backend, I’ll show live pipelines, automations, and store status here.";
  }

  return "I’ve logged your command. When you connect me to your real backend (Shopify, tasks, revenue), I’ll execute this instead of just replying.";
}
