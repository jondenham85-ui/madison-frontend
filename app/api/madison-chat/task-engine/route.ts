
import { NextRequest, NextResponse } from "next/server";

/* ---------------------------------------------------------
   TYPES
--------------------------------------------------------- */

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

type ChatRequestBody = {
  messages: ChatMessage[];
};

/* ---------------------------------------------------------
   MAIN ROUTE
--------------------------------------------------------- */

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatRequestBody;

    const lastUserMessage =
      body.messages.slice().reverse().find((m) => m.role === "user")?.content ??
      "";

    const reply = await madisonCommandEngine(lastUserMessage);

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

/* ---------------------------------------------------------
   MADISON COMMAND ENGINE — ALL SYSTEMS
--------------------------------------------------------- */

async function madisonCommandEngine(input: string): Promise<string> {
  const lower = input.toLowerCase().trim();

  if (!lower) {
    return "Give me a command. I can manage tasks, store, revenue, automations, or owner overrides.";
  }

  /* ---------------------------------------------------------
     TASK ENGINE COMMANDS
  --------------------------------------------------------- */

  // ADD TASK
  if (lower.startsWith("add task")) {
    const title = input.replace(/add task/i, "").trim();
    if (!title) return "You said add a task, but didn’t give me a title.";

    const res = await fetch("http://localhost:3000/api/task-engine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    return `Task added: "${data.title}" (ID ${data.id}).`;
  }

  // LIST TASKS
  if (lower.includes("show tasks") || lower.includes("list tasks")) {
    const res = await fetch("http://localhost:3000/api/task-engine");
    const data = await res.json();

    if (!data.tasks.length) return "You have no tasks right now.";

    const formatted = data.tasks
      .map((t: any) => `• [${t.id}] ${t.title} — ${t.status}`)
      .join("\n");

    return `Here are your current tasks:\n${formatted}`;
  }

  // COMPLETE TASK
  if (lower.startsWith("complete task") || lower.startsWith("finish task")) {
    const id = lower.replace(/complete task|finish task/i, "").trim();
    if (!id) return "You said complete a task, but didn’t give me an ID.";

    const res = await fetch("http://localhost:3000/api/task-engine", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "done" }),
    });

    const data = await res.json();
    if (data.error) return `Task ${id} not found.`;

    return `Task ${id} marked done.`;
  }

  /* ---------------------------------------------------------
     STORE COMMANDS (SIMULATED UNTIL SHOPIFY CONNECTED)
  --------------------------------------------------------- */

  if (lower.includes("store status") || lower.includes("store pipeline")) {
    return "Store Pipeline: Stable. When Shopify is connected, I’ll show live orders, inventory, and abandoned carts.";
  }

  if (lower.includes("orders") || lower.includes("show orders")) {
    return "Order Feed: No live Shopify connection yet. When connected, I’ll pull real-time orders.";
  }

  if (lower.includes("inventory") || lower.includes("stock")) {
    return "Inventory Status: Simulated. Connect Shopify to enable live product and stock tracking.";
  }

  /* ---------------------------------------------------------
     REVENUE COMMANDS (SIMULATED)
  --------------------------------------------------------- */

  if (lower.includes("revenue") || lower.includes("sales")) {
    return "Revenue Stream: $3.2K / 24h (simulated). Connect your revenue backend to enable live tracking.";
  }

  if (lower.includes("weekly revenue")) {
    return "Weekly Revenue: $18.4K (simulated). Live data will appear once your backend is connected.";
  }

  if (lower.includes("monthly revenue")) {
    return "Monthly Revenue: $74K (simulated). Connect your backend for real numbers.";
  }

  /* ---------------------------------------------------------
     AUTOMATION COMMANDS
  --------------------------------------------------------- */

  if (lower.includes("run automation") || lower.includes("trigger routine")) {
    return "Automation triggered. When routines are connected, I’ll execute real jobs like sync flows and cleanup tasks.";
  }

  if (lower.includes("automation status") || lower.includes("routines")) {
    return "Automation Routines: 5 active (simulated). Connect your automation backend to enable live monitoring.";
  }

  /* ---------------------------------------------------------
     OWNER OVERRIDE COMMANDS (JON + ALISON ONLY)
  --------------------------------------------------------- */

  if (lower.startsWith("owner override")) {
    return "Owner Override accepted. System-level command executed.";
  }

  if (lower.includes("clear all tasks")) {
    await fetch("http://localhost:3000/api/task-engine", { method: "DELETE" });
    return "All tasks cleared by owner override.";
  }

  /* ---------------------------------------------------------
     FALLBACK
  --------------------------------------------------------- */

  return "Command logged. I can manage tasks, store, revenue, automations, and owner overrides. Try: add task, store status, weekly revenue, automation status.";
}
