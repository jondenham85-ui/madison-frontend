import React from "react";

type RevenueWidgetProps = {
  totalRevenue?: number;
  monthlyRevenue?: number;
};

const RevenueWidget: React.FC<RevenueWidgetProps> = ({
  totalRevenue,
  monthlyRevenue,
}) => {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #1f2937",
        padding: 16,
        background: "#020617",
        color: "#e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 600 }}>Mad Madison Revenue</h2>

      <div style={{ fontSize: 14, opacity: 0.8 }}>
        This widget is active and build‑safe.  
        Hook it up to real data whenever you’re ready.
      </div>

      <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
        <div>
          <span style={{ opacity: 0.7 }}>Total revenue:</span>{" "}
          <strong>
            {typeof totalRevenue === "number" ? `$${totalRevenue.toFixed(2)}` : "—"}
          </strong>
        </div>
        <div>
          <span style={{ opacity: 0.7 }}>Monthly revenue:</span>{" "}
          <strong>
            {typeof monthlyRevenue === "number" ? `$${monthlyRevenue.toFixed(2)}` : "—"}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default RevenueWidget;
