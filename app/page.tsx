"use client";

import React, { useState, useEffect } from "react";
import MadisonControlRoom from "@/components/MadisonControlRoom";
import MadisonEmotionHeatmap from "@/components/MadisonEmotionHeatmap";
import MadisonSpeakerTimeline from "@/components/MadisonSpeakerTimeline";
import HologramMadison from "@/components/HologramMadison";
import MadisonOpsPage from "@/components/MadisonOpsPage";
import { syncVoiceLogs } from "@/lib/madisonVoice";

const backend =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://madison-backend.onrender.com";

type AnyObj = any;

export default function Operator() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    setBootComplete(true);
  }, []);

  useEffect(() => {
    if (!bootComplete) return;
    // Refresh all dashboard data
    void fetchDashboardData();
  }, [bootComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      void syncVoiceLogs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(`${backend}/operator/status`);
      if (!response.ok) {
        console.error("Failed to fetch dashboard data");
      }
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-teal-300 relative overflow-hidden">
      {/* Dashboard UI */}

      <MadisonOpsPage />
      <MadisonControlRoom />
      <MadisonEmotionHeatmap />
      <MadisonSpeakerTimeline />

      <div className="fixed bottom-6 left-6">
        <HologramMadison idle={true} />
      </div>
    </main>
  );
}
