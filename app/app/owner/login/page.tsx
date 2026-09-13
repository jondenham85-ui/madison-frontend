"use client";

import { useState } from "react";

export default function OwnerLogin() {
  const [email, setEmail] = useState("");

  async function login() {
    const res = await fetch("/api/owner/login", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/owner";
    } else {
      alert("Not authorized");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Owner Login</h1>
      <input
        type="email"
        placeholder="Enter owner email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />
      <button onClick={login} style={{ padding: 10, width: "100%" }}>
        Login
      </button>
    </div>
  );
}
