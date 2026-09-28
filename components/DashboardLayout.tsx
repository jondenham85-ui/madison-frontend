import React from "react";

export default function DashboardLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#05070b",
        color: "#e5f7ff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <header
        style={{
          padding: "20px 32px",
          borderBottom: "1px solid #0b1824",
          background:
            "radial-gradient(circle at top left, #0ff 0, transparent 55%), radial-gradient(circle at top right, #0ff 0, transparent 55%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <div style={{ fontSize: 14, letterSpacing: 4, textTransform: "uppercase", color: "#4fd1c5" }}>
            MadMadisonAI
          </div>
          <div style={{ fontSize: 24, fontWeight: 600 }}>{title}</div>
        </div>

        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "1px solid #4fd1c5",
            boxShadow: "0 0 25px rgba(79, 209, 197, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#4fd1c5"
          }}
        >
          Madison
        </div>
      </header>

      <nav
        style={{
          display: "flex",
          gap: 16,
          padding: "12px 32px",
          borderBottom: "1px solid #0b1824",
          background: "linear-gradient(to right, #05070b, #071019)"
        }}
      >
        {[
          { label: "Owner", href: "/owner" },
          { label: "Products", href: "/products" },
          { label: "Revenue", href: "/revenue" },
          { label: "Workflows", href: "/workflows" },
          { label: "Subscriber", href: "/subscriber" }
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#9ae6b4",
              textDecoration: "none",
              paddingBottom: 4,
              borderBottom: "2px solid transparent"
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main
        style={{
          flex: 1,
          padding: "24px 32px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#0b1824 1px, transparent 1px), linear-gradient(90deg, #0b1824 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.35,
            pointerEvents: "none"
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </main>
    </div>
  );
}
