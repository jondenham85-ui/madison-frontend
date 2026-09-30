import { operator } from "@/lib/operatorClient";

async function runMode(mode, data) {
  return operator(mode, data);
}
