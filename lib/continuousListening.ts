"use client";

import { useEffect, useRef, useState } from "react";

export function useMadisonContinuousListening() {
  const [active, setActive] = useState(false);
  const [madisonAudio, setMadisonAudio] = useState(null);

  const mediaStream = useRef(null);
  const recorder = useRef(null);
  const chunks = useRef([]);

  async function start() {
    if (active) return;

    setActive(true);

    mediaStream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder.current = new MediaRecorder(mediaStream.current);

    recorder.current.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    recorder.current.onstop = async () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" });
      chunks.current = [];

      const form = new FormData();
      form.append("audio", blob);

      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/operator/task",
        {
          method: "POST",
          body: form
        }
      );

      const data = await res.json();

      if (data.audio) {
        setMadisonAudio(data.audio);
      }

      if (active) {
        recorder.current.start();
        setTimeout(() => recorder.current.stop(), 3000);
      }
    };

    recorder.current.start();
    setTimeout(() => recorder.current.stop(), 3000);
  }

  function stop() {
    setActive(false);

    try {
      recorder.current?.stop();
      mediaStream.current?.getTracks().forEach((t) => t.stop());
    } catch (e) {}
  }

  return {
    active,
    start,
    stop,
    madisonAudio
  };
}
