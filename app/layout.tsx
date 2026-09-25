import "./globals.css";
import registerSW from "./register-sw";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mad Madison AI",
  description: "Family-Owned AI Empire — Jon & Alison Denham",
  manifest: "/manifest.json",
  themeColor: "#00e5ff",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Register service worker on client side
  if (typeof window !== "undefined") {
    registerSW();
  }

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00e5ff" />
      </head>
      <body>{children}</body>
    </html>
  );
}

