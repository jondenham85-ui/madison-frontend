import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAD Madison AI",
  description: "MAD Madison App website + PWA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
