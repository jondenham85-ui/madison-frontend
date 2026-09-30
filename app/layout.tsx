export default function RootLayout({ children }) {
  return (
    <>
      {children}

      {/* Madison Voice Systems */}
      <MadisonVoiceAssistant />
      <MadisonControlRoom />
      <MadisonEmotionHeatmap />
      <MadisonSpeakerTimeline />

      {/* Madison 3D Hologram */}
      <div className="fixed bottom-6 left-6">
        <HologramMadison />
      </div>
    </>
  );
}
