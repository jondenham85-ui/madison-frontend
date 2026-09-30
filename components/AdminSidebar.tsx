import { operator } from "@/lib/operatorClient";

async function runCEO() {
  const result = await operator("ceo", {});
  console.log(result);
}
