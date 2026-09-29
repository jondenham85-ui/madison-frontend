import { operator } from "@/lib/operatorClient";

export async function runMadisonCEO(input) {
  const result = await operator("ceo", input);
  return result;
}

