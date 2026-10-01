"use client";

import { useEffect, useState } from "react";
import { operator } from "@/lib/operatorClient";

interface DashboardData {
  tier: any;
  revenue: any;
  products: any;
  workflows: any;
}

async function loadDashboard(data: any): Promise<DashboardData> {
  try {
    return {
      tier: await operator("tier", data),
      revenue: await operator("revenue", data),
      products: await operator("product", data),
      workflows: await operator("workflow", data),
    };
  } catch (error) {
    console.error("Failed to load dashboard:", error);
    return {
      tier: null,
      revenue: null,
      products: null,
      workflows: null,
    };
  }
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    void loadDashboard({}).then(setDashboardData);
  }, []);

  return (
    <div className="w-full h-full">
      {dashboardData ? (
        <div>{children}</div>
      ) : (
        <div className="text-teal-300">Loading dashboard...</div>
      )}
    </div>
  );
}
