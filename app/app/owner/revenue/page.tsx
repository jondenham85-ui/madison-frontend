"use client";

import { useEffect, useState } from "react";

export default function RevenuePage() {
  const [entries, setEntries] = useState([]);
  const [daily, setDaily] = useState(0);
  const [weekly, setWeekly] = useState(0);

  async function loadRevenue() {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("owner_token="))
      ?.split("=")[1];

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/revenue/summary`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();

    setDaily(data.dailyTotal);
    setWeekly(data.weeklyTotal);
    setEntries(data.weekly);
  }

  useEffect(() => {
    loadRevenue();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Revenue System</h1>

      <div className="mb-6 text-xl">
        <p>Daily Revenue: <strong>${daily}</strong></p>
        <p>Weekly Revenue: <strong>${weekly}</strong></p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>

      <div className="space-y-4">
        {entries.map((e: any) => (
          <div key={e.id} className="border p-4 rounded shadow">
            <p><strong>${e.amount}</strong> — {e.source}</p>
            <p className="text-sm text-gray-500">{e.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
