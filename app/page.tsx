"use client";

import { useEffect, useState } from "react";
import { 
  fetchBackendHealth, 
  fetchSystemDiagnostic, 
  fetchOwnerStatus,
  BackendHealth,
  SystemDiagnostic,
  OwnerStatus
} from "@/lib/api";

export default function Home() {
  const [backendHealth, setBackendHealth] = useState<BackendHealth | null>(null);
  const [diagnostic, setDiagnostic] = useState<SystemDiagnostic | null>(null);
  const [ownerStatus, setOwnerStatus] = useState<OwnerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBackendData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all backend data in parallel
        const [health, diagnosticData, owner] = await Promise.all([
          fetchBackendHealth(),
          fetchSystemDiagnostic(),
          fetchOwnerStatus(),
        ]);

        setBackendHealth(health);
        setDiagnostic(diagnosticData);
        setOwnerStatus(owner);
      } catch (err) {
        setError(
          err instanceof Error 
            ? err.message 
            : "Failed to connect to backend"
        );
        console.error("Backend connection error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBackendData();
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>🚀 Madison AI</h1>
      <p style={{ fontSize: 18, color: "#666", marginBottom: 40 }}>
        Intelligent Automation System
      </p>

      {/* Backend Status */}
      <div
        style={{
          marginBottom: 40,
          padding: 20,
          border: "2px solid #0CC7C7",
          borderRadius: 8,
          backgroundColor: "#f0fffe",
        }}
      >
        <h2 style={{ fontSize: 20, marginTop: 0 }}>🔌 Backend Status</h2>
        {loading ? (
          <p style={{ color: "#666" }}>Loading backend data...</p>
        ) : error ? (
          <p style={{ color: "#d32f2f" }}>
            ❌ Error: {error}
          </p>
        ) : backendHealth ? (
          <div>
            <p style={{ margin: "10px 0", color: "#00897b" }}>
              ✅ {backendHealth.message}
            </p>
            {ownerStatus && (
              <p style={{ margin: "10px 0", fontSize: 14 }}>
                <strong>Owner:</strong> {ownerStatus.owner} | 
                <strong> System:</strong> {ownerStatus.system}
              </p>
            )}
          </div>
        ) : null}
      </div>

      {/* System Engines */}
      {diagnostic && (
        <div
          style={{
            marginBottom: 40,
            padding: 20,
            border: "2px solid #1976d2",
            borderRadius: 8,
            backgroundColor: "#f3f5f6",
          }}
        >
          <h2 style={{ fontSize: 20, marginTop: 0 }}>⚙️ Active Engines</h2>
          <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "400px" }}>
            {diagnostic.engines.owner && <li>✅ Owner Engine</li>}
            {diagnostic.engines.revenue && <li>✅ Revenue Engine</li>}
            {diagnostic.engines.content && <li>✅ Content Engine</li>}
            {diagnostic.engines.traffic && <li>✅ Traffic Engine</li>}
            {diagnostic.engines.funnel && <li>✅ Funnel Engine</li>}
            {diagnostic.engines.scaling && <li>✅ Scaling Engine</li>}
          </ul>
          <p style={{ fontSize: 12, color: "#666", marginTop: 15 }}>
            Uptime: {Math.round(diagnostic.uptime)} seconds | 
            Version: {diagnostic.version}
          </p>
        </div>
      )}

      {/* Madison Features */}
      <div
        style={{
          padding: 20,
          border: "2px solid #f57c00",
          borderRadius: 8,
          backgroundColor: "#fff8f5",
        }}
      >
        <h2 style={{ fontSize: 20, marginTop: 0 }}>🎯 Madison Agile Automation</h2>
        <p>Madison automates your entire workflow:</p>

        <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "400px" }}>
          <li>📅 Weekly sprint creation</li>
          <li>🗣️ Daily standups</li>
          <li>🤖 Automatic task assignment</li>
          <li>📊 Backlog grooming</li>
          <li>🔄 Sprint review + retrospective</li>
        </ul>

        <p style={{ marginTop: 20, fontSize: 14 }}>
          ✨ Madison handles everything. No manual setup needed.
        </p>
      </div>
    </div>
  );
}
