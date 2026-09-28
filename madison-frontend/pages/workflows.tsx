import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Panel from "../components/Panel";

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<any>(null);

  useEffect(() => {
    fetch("/api/owner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "jondenham85@gmail.com" })
    })
      .then((r) => r.json())
      .then((d) => setWorkflows(d.dashboard.workflows));
  }, []);

  return (
    <DashboardLayout title="Workflows">
      {!workflows ? <div>Loading...</div> : (
        <Panel title="Workflows">
          <pre>{JSON.stringify(workflows, null, 2)}</pre>
        </Panel>
      )}
    </DashboardLayout>
  );
}
