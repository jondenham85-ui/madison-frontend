import { NextRequest, NextResponse } from "next/server";

type TaskStatus = "pending" | "in_progress" | "done";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
};

type CreateTaskBody = {
  title: string;
};

type UpdateTaskBody = {
  status?: TaskStatus;
  title?: string;
};

let tasks: Task[] = [
  {
    id: "1",
    title: "Review Madison homepage hologram layout",
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Wire Madison chat to production backend",
    status: "in_progress",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Define revenue tracking pipeline for ShopMAD",
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// GET: list all tasks
export async function GET() {
  return NextResponse.json(
    {
      tasks,
      count: tasks.length,
    },
    { status: 200 }
  );
}

// POST: create a new task
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CreateTaskBody;

    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { error: "Task title is required." },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const newTask: Task = {
      id: String(tasks.length + 1),
      title: body.title.trim(),
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    tasks.push(newTask);

    return NextResponse.json(newTask, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

// PATCH: update a task (status or title)
export async function PATCH(req: NextRequest) {
  try {
    const body = (await req.json()) as UpdateTaskBody & { id?: string };

    if (!body.id) {
      return NextResponse.json(
        { error: "Task id is required." },
        { status: 400 }
      );
    }

    const task = tasks.find((t) => t.id === body.id);

    if (!task) {
      return NextResponse.json(
        { error: "Task not found." },
        { status: 404 }
      );
    }

    if (body.title !== undefined) {
      task.title = body.title.trim();
    }

    if (body.status !== undefined) {
      task.status = body.status;
    }

    task.updatedAt = new Date().toISOString();

    return NextResponse.json(task, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

// DELETE: clear all tasks (owner-level reset)
export async function DELETE() {
  tasks = [];
  return NextResponse.json(
    { message: "All tasks cleared.", tasks: [], count: 0 },
    { status: 200 }
  );
}
