import MadisonVoiceAssistant from "@/components/MadisonVoiceAssistant";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <MadisonVoiceAssistant />
    </>
  );
}

