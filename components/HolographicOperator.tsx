"use client";

export default function HolographicOperator() {
  return (
    <div
      style={{
        marginTop: "32px",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at top, rgba(0,230,230,0.9) 0%, #001b1f 45%, #000000 100%)",
        boxShadow: "0 0 40px rgba(0,230,230,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        animation: "madOrbFloat 4s infinite alternate",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          border: "1px solid rgba(0,230,230,0.7)",
          boxShadow: "0 0 25px rgba(0,230,230,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        MAD
        <br />
        OPERATOR
      </div>
    </div>
  );
}
