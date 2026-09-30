"use client";

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
  useEffect(() => {
    const interval = setInterval(() => {
      syncVoiceLogs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white">

        {children}

        <MadisonOpsPage />
        <MadisonVoiceAssistant />
        <MadisonControlRoom />
        <MadisonEmotionHeatmap />
        <MadisonSpeakerTimeline />

        <div className="fixed bottom-6 left-6">
          <HologramMadison idle={true} />
        </div>

      </body>
    </html>
  );
}
