import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Panel from "../components/Panel";

export default function SubscriberPage() {
  const [products, setProducts] = useState<any>(null);

  useEffect(() => {
    fetch("/api/owner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "jondenham85@gmail.com" })
    })
      .then((r) => r.json())
      .then((d) => setProducts(d.dashboard.products));
  }, []);

  return (
    <DashboardLayout title="Subscriber Dashboard">
      {!products ? <div>Loading...</div> : (
        <Panel title="Available Products">
          <pre>{JSON.stringify(products, null, 2)}</pre>
        </Panel>
      )}
    </DashboardLayout>
  );
}
