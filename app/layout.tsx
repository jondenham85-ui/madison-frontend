import "./globals.css";

export const metadata = {
  title: "MadMadisonAI",
  description: "Holographic AI Operator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="
          bg-black text-white
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}
