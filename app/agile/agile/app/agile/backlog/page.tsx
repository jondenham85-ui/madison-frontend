"use client";
import { useState } from "react";

export default function Backlog() {
  const [backlog, setBacklog] = useState([
    "Improve PWA caching",
    "Optimize face‑swap engine",
    "Add new Madison workflows",
    "Enhance revenue automation"
  ]);

  const addTask = () => {
    const name = prompt("New backlog task:");
    if (!name) return;
    setBacklog([...backlog, name]);
  };

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Madison Backlog</h1>

      <button
        onClick={addTask}
        style={{
          padding: "10px 20px",
          backgroundColor: "#00C4B4",
          color: "#fff",
          borderRadius: 8,
          border: "none",
          marginBottom: 20
        }}
      >
        Add Task
      </button>

      {backlog.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
    </main>
  );
}
