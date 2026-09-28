import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Panel from "../components/Panel";

export default function RevenuePage() {
  const [revenue, setRevenue] = useState<any>(null);

  useEffect(() => {
    fetch("/api/owner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "jondenham85@gmail.com" })
    })
      .then((r) => r.json())
      .then((d) => setRevenue(d.dashboard.revenue));
  }, []);

  return (
    <DashboardLayout title="Revenue">
      {!revenue ? <div>Loading...</div> : (
        <Panel title="Revenue">
          <pre>{JSON.stringify(revenue, null, 2)}</pre>
        </Panel>
      )}
    </DashboardLayout>
  );
}
