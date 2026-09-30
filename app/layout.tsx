import "./globals.css";

import MadisonVoiceAssistant from "@/components/MadisonVoiceAssistant";
import MadisonControlRoom from "@/components/MadisonControlRoom";
import MadisonEmotionHeatmap from "@/components/MadisonEmotionHeatmap";
import MadisonSpeakerTimeline from "@/components/MadisonSpeakerTimeline";
import HologramMadison from "@/components/HologramMadison";
import MadisonOpsPage from "@/components/MadisonOpsPage";
import { useEffect } from "react";
import { syncVoiceLogs } from "@/lib/voiceLogs";

export const metadata = {
  title: "MAD Madison AI",
  description: "MAD Madison AI frontend",
};

export default function RootLayout({ children }) {
  // Voice log sync (frontend → backend DB)
  useEffect(() => {
    const interval = setInterval(() => {
      syncVoiceLogs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* MAIN APP CONTENT */}
        {children}

        {/* MADISON OPS PAGE (GLOBAL PANEL) */}
        <MadisonOpsPage />

        {/* MADISON VOICE ASSISTANT */}
        <MadisonVoiceAssistant />

        {/* MADISON CONTROL ROOM */}
        <MadisonControlRoom />

        {/* MADISON EMOTION HEATMAP */}
        <MadisonEmotionHeatmap />

        {/* MADISON MULTI-SPEAKER TIMELINE */}
        <MadisonSpeakerTimeline />

        {/* MADISON 3D HOLOGRAM WITH IDLE ANIMATIONS */}
        <div className="fixed bottom-6 left-6">
          <HologramMadison idle={true} />
        </div>

      </body>
    </html>
  );
}

