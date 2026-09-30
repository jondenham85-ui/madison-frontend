import { operator } from "@/lib/operatorClient";

async function syncParticles() {
  await operator("workflow", { workflows: [] });
}
