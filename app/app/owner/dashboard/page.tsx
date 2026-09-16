"use client";

import { useEffect, useState } from "react";

export default function OwnerDashboard() {
  const [owner, setOwner] = useState<string | null>(null);

  useEffect(() => {
    async function loadOwner() {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("owner_token="))
        ?.split("=")[1];

      if (!token) {
        setOwner(null);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/owner/validate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }
      );

      const data = await res.json();
      if (data.valid) {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setOwner(decoded.email);
      } else {
        setOwner(null);
      }
    }

    loadOwner();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Owner Dashboard</h1>

      {owner ? (
        <div className="mb-6 text-xl">
          Logged in as <strong>{owner}</strong>
        </div>
      ) : (
        <div className="text-red-600 text-xl">
          Not authorized
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Madison AI Engine</h2>
          <p className="mb-4">Control and monitor Madison’s AI systems.</p>
          <button className="bg-black text-white p-3 rounded w-full">
            Open AI Controls
          </button>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Revenue System</h2>
          <p className="mb-4">Daily + weekly revenue reports and automation.</p>
          <button className="bg-black text-white p-3 rounded w-full">
            Open Revenue Panel
          </button>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Automation</h2>
          <p className="mb-4">Manage Madison’s automated tasks.</p>
          <button className="bg-black text-white p-3 rounded w-full">
            Automation Settings
          </button>
        </div>

        <div className="border p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">System Health</h2>
          <p className="mb-4">Check backend, frontend, and API status.</p>
          <button className="bg-black text-white p-3 rounded w-full">
            View System Health
          </button>
        </div>
      </div>
    </div>
  );
}
