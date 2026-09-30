import "./globals.css";
import MadisonVoiceAssistant from "@/components/MadisonVoiceAssistant";
import MadisonControlRoom from "@/components/MadisonControlRoom";
import MadisonEmotionHeatmap from "@/components/MadisonEmotionHeatmap";
import MadisonSpeakerTimeline from "@/components/MadisonSpeakerTimeline";
import HologramMadison from "@/components/HologramMadison";

export const metadata = {
  title: "MAD Madison AI",
  description: "MAD Madison AI frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* MAIN APP CONTENT */}
        {children}

        {/* MADISON VOICE ASSISTANT */}
        <MadisonVoiceAssistant />

        {/* MADISON CONTROL ROOM */}
        <MadisonControlRoom />

        {/* MADISON EMOTION HEATMAP */}
        <MadisonEmotionHeatmap />

        {/* MADISON MULTI-SPEAKER TIMELINE */}
        <MadisonSpeakerTimeline />

        {/* MADISON 3D HOLOGRAM */}
        <div className="fixed bottom-6 left-6">
          <HologramMadison />
        </div>

      </body>
    </html>
  );
}
