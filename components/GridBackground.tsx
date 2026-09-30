import { operator } from "@/lib/operatorClient";

async function updateGrid() {
  await operator("workflow", { workflows: [] });
}

