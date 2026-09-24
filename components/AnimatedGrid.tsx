export default function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 opacity-40 animate-gridMove"
      style={{
        backgroundImage:
          "linear-gradient(#00f6ff22 1px, transparent 1px), linear-gradient(90deg, #00f6ff22 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}
    />
  );
}
