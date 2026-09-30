type Speaker = "owner" | "partner" | "system";

export type ConversationTurn = {
  speaker: Speaker;
  text: string;
};

const history: ConversationTurn[] = [];

export function addTurn(speaker: Speaker, text: string) {
  history.push({ speaker, text });
}

export function getHistory() {
  return history.slice(-20);
}
