"use client";

export default function Timeline() {
  const timeline = [
    { day: "Monday", event: "Sprint created" },
    { day: "Tuesday", event: "Standup + task updates" },
    { day: "Wednesday", event: "Mid‑sprint progress check" },
    { day: "Thursday", event: "Backlog grooming" },
    { day: "Friday", event: "Sprint review + retrospective" }
  ];

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Madison Sprint Timeline</h1>

      {timeline.map((t, i) => (
        <div key={i} style={{ marginBottom: 15 }}>
          <strong>{t.day}</strong>
          <p>{t.event}</p>
        </div>
      ))}
    </main>
  );
}
