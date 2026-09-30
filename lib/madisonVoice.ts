import { operator } from "@/lib/operatorClient";

export async function madisonVoice(inputText: string) {
  const result = await operator("ceo", { message: inputText });
  return result;
}
