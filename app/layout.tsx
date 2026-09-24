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
