"use client";

import { useEffect, useState } from "react";

export default function OwnerPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://madison-backend.onrender.com/operator/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        mode: "owner",
        data: { email: "jondenham85@gmail.com" }
      })
    })
      .then((r) => r.json())
      .then((d) => setData(d.result));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Owner Dashboard</h1>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
