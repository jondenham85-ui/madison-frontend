"use client";
import { useState } from "react";

export default function AgileBoard() {
  const [tasks, setTasks] = useState([
    { name: "Initialize sprint", status: "Backlog" },
    { name: "Run daily standup", status: "In Progress" },
    { name: "Complete sprint review", status: "Done" }
  ]);

  const moveTask = (index, newStatus) => {
    const updated = [...tasks];
    updated[index].status = newStatus;
    setTasks(updated);
  };

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Madison Sprint Board</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <div>
          <h2>Backlog</h2>
          {tasks
            .filter((t) => t.status === "Backlog")
            .map((t, i) => (
              <div key={i}>
                <p>{t.name}</p>
                <button onClick={() => moveTask(i, "In Progress")}>
                  Move to In Progress
                </button>
              </div>
            ))}
        </div>

        <div>
          <h2>In Progress</h2>
          {tasks
            .filter((t) => t.status === "In Progress")
            .map((t, i) => (
              <div key={i}>
                <p>{t.name}</p>
                <button onClick={() => moveTask(i, "Done")}>
                  Move to Done
                </button>
              </div>
            ))}
        </div>

        <div>
          <h2>Done</h2>
          {tasks
            .filter((t) => t.status === "Done")
            .map((t, i) => (
              <p key={i}>{t.name}</p>
            ))}
        </div>
      </div>
    </main>
  );
}
