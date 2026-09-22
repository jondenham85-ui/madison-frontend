import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAD Madison AI",
  description: "Unified MAD Madison AI system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00e6e6" />
      </head>
      <body className="mad-body">
        <div className="mad-grid-background" />
        <div className="mad-body-inner">{children}</div>
      </body>
    </html>
  );
}
