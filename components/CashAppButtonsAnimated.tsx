import { operator } from "@/lib/operatorClient";

async function logCashAppClick() {
  await operator("revenue", { daily: [5] });
}
