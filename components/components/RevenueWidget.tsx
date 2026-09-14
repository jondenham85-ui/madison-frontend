"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function RevenueWidget() {
  const [data, setData] = useState({
    total: 0,
    last: null,
    customers: 0,
    subscriptions: 0,
    updated: ""
  });

  const [history, setHistory] = useState([]);

  async function load() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/revenue/live`,
        { cache: "no-store" }
      );

      const json = await res.json();
      setData(json);

      setHistory((prev) => [
        ...prev.slice(-19),
        { time: json.updated, total: json.total }
      ]);
    } catch (err) {
      console.error("Revenue widget error:", err);
    }
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: history.map((h) => h.time),
    datasets: [
      {
        label: "Revenue Over Time",
        data: history.map((h) => h.total),
        borderColor: "#00eaff",
        backgroundColor: "rgba(0, 234, 255, 0.2)",
        tension: 0.3
      }
    ]
  };

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

      <div style={{ marginTop: "30px" }}>
        <Line data={chartData} />
      </div>
    </div>
  );
}
