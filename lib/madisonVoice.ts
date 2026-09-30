import { operator } from "@/lib/operatorClient";
import { addTurn, getHistory } from "./conversation";

export async function madisonVoice(
  inputText: string,
  speaker: "owner" | "partner" = "owner"
) {
  addTurn(speaker, inputText);

  const result = await operator("ceo", {
    message: inputText,
    voice: "madison-v1",
    speaker,
    history: getHistory(),
  });

  return {
    text: result?.result?.summary || "I heard you.",
    raw: result
  };
}
