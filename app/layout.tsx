import "./globals.css";

import MadisonVoiceAssistant from "@/components/MadisonVoiceAssistant";
import MadisonControlRoom from "@/components/MadisonControlRoom";
import MadisonEmotionHeatmap from "@/components/MadisonEmotionHeatmap";
import MadisonSpeakerTimeline from "@/components/MadisonSpeakerTimeline";
import HologramMadison from "@/components/HologramMadison";
import MadisonOpsPage from "@/components/MadisonOpsPage";
import VoiceSyncWrapper from "@/components/VoiceSyncWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}

        <VoiceSyncWrapper>
          <MadisonOpsPage />
          <MadisonVoiceAssistant />
          <MadisonControlRoom />
          <MadisonEmotionHeatmap />
          <MadisonSpeakerTimeline />

          <div className="fixed bottom-6 left-6">
            <HologramMadison idle={true} />
          </div>
        </VoiceSyncWrapper>
      </body>
    </html>
  );
}
