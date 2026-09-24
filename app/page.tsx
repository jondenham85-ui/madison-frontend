import AnimatedGrid from "@/components/AnimatedGrid";
import MadisonPulse from "@/components/MadisonPulse";
import HologramEffect from "@/components/HologramEffect";
import NeonButton from "@/components/NeonButton";
import PWAInstallButton from "@/components/PWAInstallButton";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <AnimatedGrid />
      <MadisonPulse />
      <HologramEffect />

      <div className="relative z-10 text-center">
        <h1 className="text-neon text-6xl mb-6 drop-shadow-neon">
          MAD Madison AI
        </h1>
        <p className="text-neon/80 mb-10">
          The holographic AI system that breathes with your backend.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <NeonButton>Enter Admin</NeonButton>
          <NeonButton>Launch Chat</NeonButton>
          <PWAInstallButton />
        </div>
      </div>
    </main>
  );
}
