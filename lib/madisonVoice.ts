import { getHistory } from "./conversation";
import { operator } from "./operatorClient";

export async function syncVoiceLogs() {
  const history = getHistory();

  if (history.length === 0) return;

  await operator("voiceLogs", {
    logs: history,
    timestamp: Date.now(),
  });
}
