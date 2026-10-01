```tsx
import "./globals.css";

import MadisonVoiceAssistant from "@/components/MadisonVoiceAssistant";
import MadisonControlRoom from "@/components/MadisonControlRoom";
import MadisonEmotionHeatmap from "@/components/MadisonEmotionHeatmap";
import MadisonSpeakerTimeline from "@/components/MadisonSpeakerTimeline";
import HologramMadison from "@/components/HologramMadison";
import MadisonOpsPage from "@/components/MadisonOpsPage";
import VoiceLogSync from "@/components/VoiceLogSync";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <VoiceLogSync />

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
```
