export default function Hero() {
  return (
    <section
      style={{
        padding: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
        Welcome to Madison AI
      </h1>
      <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
        Your intelligent automation system — built to scale your workflow,
        simplify your operations, and grow your empire.
      </p>
    </section>
  );
}
