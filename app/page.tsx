import { Suspense } from "react";
import ClientHome from "./client-home";

export const metadata = {
  title: "Madison AI",
  description: "Intelligent Automation System",
};

export default function Home() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Loading Madison AI...</div>}>
      <ClientHome />
    </Suspense>
  );
}
