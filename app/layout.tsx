“use client”;

import “./globals.css”;

import MadisonVoiceAssistant from “@/components/MadisonVoiceAssistant”;
import MadisonControlRoom from “@/components/MadisonControlRoom”;
import MadisonEmotionHeatmap from “@/components/MadisonEmotionHeatmap”;
import MadisonSpeakerTimeline from “@/components/MadisonSpeakerTimeline”;
import HologramMadison from “@/components/HologramMadison”;
import MadisonOpsPage from “@/components/MadisonOpsPage”;

import { useEffect } from “react”;
import { syncVoiceLogs } from “@/lib/voiceLogs”;

export default function RootLayout({ children }) {
useEffect(() => {
const sync = async () => {
try {
await syncVoiceLogs();
} catch (error) {
console.error(“Madison voice log sync failed:”, error);
}
};

sync();
const interval = setInterval(sync, 5000);
return () => clearInterval(interval);

}, []);

return (
{children}

    <MadisonOpsPage />
    <MadisonVoiceAssistant />
    <MadisonControlRoom />
    <MadisonEmotionHeatmap />
    <MadisonSpeakerTimeline />
    <div className="fixed bottom-6 left-6 z-30">
      <HologramMadison idle={true} />
    </div>
  </body>
</html>

);
}
