import { operator } from "@/lib/operatorClient";

async function hologramPulse() {
  await operator("tier", { revenue: 0 });
}
