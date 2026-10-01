    await startContinuousMadison(
      () => setSpeaking(true),
      () => setSpeaking(false),
      speaker
    );
  } catch (error) {
    console.error("Madison voice assistant error:", error);

    setActive(false);
    setSpeaking(false);
  }
} else {
  stopContinuousMadison();

  setActive(false);
  setSpeaking(false);
}
