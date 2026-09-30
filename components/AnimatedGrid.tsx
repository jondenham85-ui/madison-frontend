import { operator } from "@/lib/operatorClient";

async function syncGrid() {
  await operator("workflow", { workflows: [] });
}
