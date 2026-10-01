"use client";

import React, { useState, useEffect } from "react";
import MadisonVoiceAssistant from "@/components/MadisonVoiceAssistant";
import MadisonControlRoom from "@/components/MadisonControlRoom";
import MadisonEmotionHeatmap from "@/components/MadisonEmotionHeatmap";
import MadisonSpeakerTimeline from "@/components/MadisonSpeakerTimeline";
import HologramMadison from "@/components/HologramMadison";
import MadisonOpsPage from "@/components/MadisonOpsPage";
import { syncVoiceLogs } from "@/lib/voiceLogs";

const backend =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://madison-backend.onrender.com";

type AnyObj = any;

export default function Operator() {
  const [bootComplete, setBootComplete] = useState(false);

  // ... your existing state and functions stay the same ...

  useEffect(() => {
    setBootComplete(true);
  }, []);

  useEffect(() => {
    if (!bootComplete) return;
    refreshAll();
  }, [bootComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      syncVoiceLogs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ... rest of the component ...

  return (
    <main className="min-h-screen bg-black text-teal-300 relative overflow-hidden">
      {/* existing dashboard UI */}

      <MadisonOpsPage />
      <MadisonVoiceAssistant />
      <MadisonControlRoom />
      <MadisonEmotionHeatmap />
      <MadisonSpeakerTimeline />

      <div className="fixed bottom-6 left-6">
        <HologramMadison idle={true} />
      </div>
    </main>
  );
}
