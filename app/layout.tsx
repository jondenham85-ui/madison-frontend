<link rel="manifest" href="/manifest.json" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta name="theme-color" content="#00e5ff" />
import "./globals.css";
import registerSW from "./register-sw";

export const metadata = {
  title: "MAD Madison AI",
  description: "Neon AI System"
};

export default function RootLayout({ children }: any) {
  if (typeof window !== "undefined") {
    registerSW();
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
