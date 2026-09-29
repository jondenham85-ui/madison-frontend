import { operator } from "@/lib/operatorClient";

async function runMode(mode, data) {
  const result = await operator(mode, data);
  return result;
}
