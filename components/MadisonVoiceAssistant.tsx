    <div className="flex gap-2 text-xs text-gray-300">
      <button
        type="button"
        onClick={() => setSpeaker("owner")}
        className={`px-3 py-1 rounded-full border ${
          speaker === "owner"
            ? "border-teal-400"
            : "border-gray-600"
        }`}
      >
        Owner
      </button>

      <button
        type="button"
        onClick={() => setSpeaker("partner")}
        className={`px-3 py-1 rounded-full border ${
          speaker === "partner"
            ? "border-teal-400"
            : "border-gray-600"
        }`}
      >
        Partner
      </button>
    </div>
  </div>

  <div className="fixed bottom-6 left-6 z-40">
    <HologramMadison speaking={speaking} />
  </div>
</>
