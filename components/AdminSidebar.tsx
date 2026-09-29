import { operator } from "@/lib/operatorClient";

async function runCEO() {
  const result = await operator("ceo", adminData);
  console.log(result);
}
