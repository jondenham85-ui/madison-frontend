import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Panel from "../components/Panel";

export default function OwnerDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://madison-backend-7lvr.onrender.com/api/owner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "jondenham85@gmail.com" })
    })
      .then((r) => r.json())
      .then((d) => setData(d.dashboard));
  }, []);

  return (
    <DashboardLayout title="Owner Dashboard">
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }}
        >
          <Panel title="Products">
            <pre>{JSON.stringify(data.products, null, 2)}</pre>
          </Panel>

          <Panel title="Revenue">
            <pre>{JSON.stringify(data.revenue, null, 2)}</pre>
          </Panel>

          <Panel title="Workflows">
            <pre>{JSON.stringify(data.workflows, null, 2)}</pre>
          </Panel>

          <Panel title="System">
            <pre>{JSON.stringify(data.system, null, 2)}</pre>
          </Panel>
        </div>
      )}
    </DashboardLayout>
  );
}
