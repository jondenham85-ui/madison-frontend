let ws: WebSocket | null = null;
let listeners: ((event: any) => void)[] = [];

export function connectWS() {
  if (ws) return ws;

  ws = new WebSocket("wss://madison-backend-7lvr.onrender.com/ws");

  ws.onopen = () => console.log("WS Connected");
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    listeners.forEach((fn) => fn(data));
  };
  ws.onclose = () => {
    console.log("WS Disconnected — retrying...");
    ws = null;
    setTimeout(connectWS, 3000);
  };

  return ws;
}

export function onEvent(fn: (event: any) => void) {
  listeners.push(fn);
}

connectWS();
