"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import RevenueWidget from "@/components/RevenueWidget";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState({
    ok: false,
    message: "Loading..."
  });

  useEffect(() => {
    async function checkBackend() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/health`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setStatus({ ok: true, message: data.message || "Backend Online" });
      } catch (err) {
        setStatus({ ok: false, message: "Error: Load failed" });
      }
    }

    checkBackend();
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <Header />
      <Hero />
      <Features />

      <RevenueWidget />

      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>Backend Status</h3>
        <p style={{ color: status.ok ? "green" : "red", fontSize: "18px" }}>
          {status.message}
        </p>
      </div>

      <Footer />
    </main>
  );
}
