import { operator } from "@/lib/operatorClient";

async function initMadison() {
  await operator("tier", { revenue: 0 });
}
