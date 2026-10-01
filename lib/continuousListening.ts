activeRecorder = new MediaRecorder(activeStream);

const recorder = activeRecorder;

const recordChunk = () => {
  if (!isRunning || recorder.state !== "inactive") {
    return;
  }

  const chunks: BlobPart[] = [];

  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  recorder.onstop = async () => {
    if (!isRunning) {
      return;
    }

    try {
      const audioBlob = new Blob(chunks, {
        type: "audio/webm",
      });

      const text = await whisperTranscribe(audioBlob);

      if (!isRunning || !text) {
        return;
      }

      if (detectWakeWord(text)) {
        const cleaned = text.replace(/madison/gi, "").trim();

        if (cleaned) {
          const response = await madisonVoice(cleaned, speaker);
          const emotion = detectEmotion(response.text);

          onSpeakStart?.();

          try {
            await speak(response.text, emotion);
          } finally {
            onSpeakEnd?.();
          }
        }
      }
    } catch (error) {
      console.error(
        "Madison continuous listening error:",
        error
      );

      onSpeakEnd?.();
    }

    if (isRunning) {
      recordChunk();
    }
  };

  recorder.start();

  stopTimer = setTimeout(() => {
    if (isRunning && recorder.state === "recording") {
      recorder.stop();
    }
  }, 2000);
};

recordChunk();
