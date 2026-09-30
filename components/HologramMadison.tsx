import { operator } from "@/lib/operatorClient";

async function sendMessageToMadison(message) {
  return operator("chat", { message });
}

