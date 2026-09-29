import { operator } from "@/lib/operatorClient";

async function loadDashboard() {
  const tier = await operator("tier", dashboardData);
  const revenue = await operator("revenue", dashboardData);
  const products = await operator("product", dashboardData);
  const workflows = await operator("workflow", dashboardData);

  return { tier, revenue, products, workflows };
}

