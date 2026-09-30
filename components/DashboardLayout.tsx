import { operator } from "@/lib/operatorClient";

async function loadDashboard(data) {
  return {
    tier: await operator("tier", data),
    revenue: await operator("revenue", data),
    products: await operator("product", data),
    workflows: await operator("workflow", data),
  };
}
