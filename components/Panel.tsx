import React from "react";

export default function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #1a3440",
        background: "rgba(5, 10, 18, 0.9)",
        boxShadow: "0 0 18px rgba(15, 118, 110, 0.35)",
        padding: 16
      }}
    >
      <div
        style={{
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: "#63b3ed",
          marginBottom: 8
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 12 }}>{children}</div>
    </div>
  );
}
