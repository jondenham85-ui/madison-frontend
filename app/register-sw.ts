export default function registerSW() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }
}
