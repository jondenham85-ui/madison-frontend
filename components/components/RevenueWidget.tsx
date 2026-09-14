"use client";

import { useEffect, useState } from "react";

export default function RevenueWidget() {
  const [data, setData] = useState({
    total: 0,
    last: null,
    customers: 0,
    subscriptions: 0,
    updated: ""
  });

  async function load() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/revenue/live`,
        { cache: "no-store" }
      );

      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Revenue widget error:", err);
    }
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        marginTop: "20px"
      }}
    >
      <h3>Real‑Time Revenue</h3>

      <p style={{ fontSize: "28px", fontWeight: "bold" }}>
        ${data.total.toFixed(2)}
      </p>

      <p>Last Transaction: {data.last || "None yet"}</p>
      <p>Customers Today: {data.customers}</p>
      <p>Subscriptions: {data.subscriptions}</p>

      <small>Updated: {data.updated}</small>
    </div>
  );
}
