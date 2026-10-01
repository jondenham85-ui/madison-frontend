"use client";

import { useEffect, useState } from "react";

export default function MadisonVoiceAssistant() {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Voice assistant initialization would go here
    // This is a placeholder for the voice UI component
  }, []);

  return (
    <div className="hidden">
      {/* Voice assistant UI would render here */}
      {isListening && <span>Listening...</span>}
    </div>
  );
}
