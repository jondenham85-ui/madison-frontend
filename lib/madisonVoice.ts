import { getHistory } from "./conversation";
import { operator } from "./operatorClient";

export async function syncVoiceLogs() {
  try {
    const history = getHistory();

    if (history.length === 0) return;

    await operator("voiceLogs", {
      logs: history,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Failed to sync voice logs:", error);
  }
}
