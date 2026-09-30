import { operator } from "@/lib/operatorClient";

async function pulse() {
  await operator("tier", {});
}
