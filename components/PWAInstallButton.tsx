import { operator } from "@/lib/operatorClient";

async function trackInstall() {
  await operator("product", { products: [] });
}

