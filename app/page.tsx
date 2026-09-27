"use client";

import React, { useState, useEffect } from "react";

const backend =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://madison-backend.onrender.com";

type AnyObj = any;

export default function Operator() {
  const [bootComplete, setBootComplete] = useState(false);

  const [products, setProducts] = useState<AnyObj[]>([]);
  const [revenue, setRevenue] = useState<number>(0);
  const [systemStatus, setSystemStatus] = useState<AnyObj | null>(null);
  const [notifications, setNotifications] = useState<AnyObj[]>([]);
  const [engineStatus, setEngineStatus] = useState<AnyObj | null>(null);

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLog, setTerminalLog] = useState<string[]>([]);

  const [avatarStatus] = useState("ONLINE");

  const [voiceInput, setVoiceInput] = useState("");
  const [voiceResponse, setVoiceResponse] = useState("");

  const [revenueHistory, setRevenueHistory] = useState<number[]>([]);

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  const [commandStatus, setCommandStatus] = useState("IDLE");

  const loadProducts = async () => {
    try {
      const res = await fetch(`${backend}/products`);
      const data = await res.json();
      setProducts(data || []);
    } catch (err) {
      console.error("Failed to load products:", err);
    }
  };

  const loadRevenue = async () => {
    try {
      const res = await fetch(`${backend}/revenue`);
      const data = await res.json();
      const total = data?.total || 0;
      setRevenue(total);
      const history = data?.history || [];
      setRevenueHistory(history);
    } catch (err) {
      console.error("Failed to load revenue:", err);
    }
  };

  const loadSystemStatus = async () => {
    try {
      const res = await fetch(`${backend}/system-status`);
      const data = await res.json();
      setSystemStatus(data);
    } catch (err) {
      console.error("Failed to load system status:", err);
    }
  };

  const loadNotifications = async () => {
    try {
      const res = await fetch(`${backend}/notifications`);
      const data = await res.json();
      setNotifications(data || []);
    } catch (err) {
      console.error("Failed to load notifications:", err);
    }
  };

  const loadEngineStatus = async () => {
    try {
      const res = await fetch(`${backend}/engine-status`);
      const data = await res.json();
      setEngineStatus(data);
    } catch (err) {
      console.error("Failed to load engine status:", err);
    }
  };

  const refreshAll = () => {
    setCommandStatus("REFRESHING");
    loadProducts();
    loadRevenue();
    loadSystemStatus();
    loadNotifications();
    loadEngineStatus();
    setTimeout(() => setCommandStatus("IDLE"), 1000);
  };

  const rebootEngine = async () => {
    setCommandStatus("ENGINE REBOOT");
    try {
      await fetch(`${backend}/engine-reboot`, { method: "POST" });
      await loadEngineStatus();
    } catch (err) {
      console.error("Failed to reboot engine:", err);
    } finally {
      setTimeout(() => setCommandStatus("IDLE"), 1000);
    }
  };

  const clearNotificationsAction = async () => {
    setCommandStatus("CLEARING NOTIFICATIONS");
    try {
      await fetch(`${backend}/notifications/clear`, { method: "POST" });
      setNotifications([]);
    } catch (err) {
      console.error("Failed to clear notifications:", err);
    } finally {
      setTimeout(() => setCommandStatus("IDLE"), 1000);
    }
  };

  const reloadProductsAction = () => {
    setCommandStatus("RELOADING PRODUCTS");
    loadProducts();
    setTimeout(() => setCommandStatus("IDLE"), 1000);
  };

  const reloadRevenueAction = () => {
    setCommandStatus("RELOADING REVENUE");
    loadRevenue();
    setTimeout(() => setCommandStatus("IDLE"), 1000);
  };

  const handleTerminalCommand = async () => {
    const cmd = terminalInput.trim();
    if (!cmd) return;

    setTerminalLog((prev) => [...prev, `> ${cmd}`]);
    setTerminalInput("");

    try {
      const res = await fetch(`${backend}/terminal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: cmd }),
      });
      const data = await res.json();
      setTerminalLog((prev) => [...prev, JSON.stringify(data)]);
    } catch {
      setTerminalLog((prev) => [...prev, "ERROR: Terminal command failed"]);
    }
  };

  const handleVoiceSend = async () => {
    const text = voiceInput.trim();
    if (!text) return;

    setVoiceResponse("Processing...");
    try {
      const res = await fetch(`${backend}/voice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setVoiceResponse(data?.reply || "No response");
    } catch {
      setVoiceResponse("Voice assistant error");
    }
  };

  const handleAddProduct = async () => {
    if (!newProductName.trim()) return;
    try {
      const res = await fetch(`${backend}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newProductName,
          price: parseFloat(newProductPrice) || 0,
        }),
      });
      const created = await res.json();
      setProducts((prev) => [...prev, created]);
      setNewProductName("");
      setNewProductPrice("");
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await fetch(`${backend}/products/${id}`, { method: "DELETE" });
      setProducts((prev) => prev.filter((p: AnyObj) => p.id !== id));
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  useEffect(() => {
    setBootComplete(true);
  }, []);

  useEffect(() => {
    if (!bootComplete) return;
    refreshAll();
  }, [bootComplete]);

  const renderRevenueBars = () => {
    if (!revenueHistory || revenueHistory.length === 0) {
      return <p className="text-xs text-teal-400">No revenue history.</p>;
    }
    const max = Math.max(...revenueHistory, 1);
    return (
      <div className="flex items-end gap-1 h-24">
        {revenueHistory.map((value, idx) => {
          const height = (value / max) * 100;
          return (
            <div
              key={idx}
              className="bg-teal-500 rounded-sm"
              style={{ height: `${height}%`, width: "8px" }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-black text-teal-300 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0 0, rgba(45,212,191,0.25) 0, transparent 50%), radial-gradient(circle at 100% 100%, rgba(45,212,191,0.25) 0, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative z-10 p-4 md:p-6 lg:p-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              MAD Madison AI — Operator Dashboard
            </h1>
            <p className="text-xs md:text-sm text-teal-400 mt-1">
              Backend: {backend} · Status: {commandStatus}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={refreshAll}
              className="px-3 py-1 text-xs md:text-sm border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
            >
              Refresh All
            </button>
            <button
              onClick={rebootEngine}
              className="px-3 py-1 text-xs md:text-sm border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
            >
              Reboot Engine
            </button>
            <button
              onClick={clearNotificationsAction}
              className="px-3 py-1 text-xs md:text-sm border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
            >
              Clear Notifications
            </button>
            <button
              onClick={reloadProductsAction}
              className="px-3 py-1 text-xs md:text-sm border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
            >
              Reload Products
            </button>
            <button
              onClick={reloadRevenueAction}
              className="px-3 py-1 text-xs md:text-sm border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
            >
              Reload Revenue
            </button>
            <button
              onClick={() => setTerminalOpen((v) => !v)}
              className="px-3 py-1 text-xs md:text-sm border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
            >
              {terminalOpen ? "Close Terminal" : "Open Terminal"}
            </button>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-teal-500 rounded-lg bg-black/60 p-4 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-teal-500 flex items-center justify-center relative">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 blur-sm" />
              <div className="absolute inset-2 border border-teal-500/60 rounded-full animate-pulse" />
            </div>
            <h2 className="mt-3 text-lg font-semibold">Madison Operator</h2>
            <p className="text-xs text-teal-400 mt-1">Status: {avatarStatus}</p>
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">Products</h2>
            {products.length === 0 ? (
              <p className="text-xs text-teal-400">No products loaded.</p>
            ) : (
              <ul className="space-y-1 text-xs">
                {products.map((p: AnyObj, i: number) => (
                  <li
                    key={p.id || i}
                    className="flex items-center justify-between border-b border-teal-500/20 pb-1"
                  >
                    <span>{p.name || "Unnamed product"}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-400">
                        ${p.price ?? "0.00"}
                      </span>
                      {p.id && (
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="text-[10px] px-2 py-0.5 border border-teal-500 rounded hover:bg-teal-500 hover:text-black transition"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">Product Editor</h2>
            <div className="flex flex-col gap-2 text-xs">
              <input
                className="bg-black/80 border border-teal-500/50 rounded px-2 py-1 text-teal-200"
                placeholder="Product name"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
              />
              <input
                className="bg-black/80 border border-teal-500/50 rounded px-2 py-1 text-teal-200"
                placeholder="Price"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
              />
              <button
                onClick={handleAddProduct}
                className="mt-1 px-3 py-1 border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition"
              >
                Add Product
              </button>
            </div>
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-2xl font-bold mb-3">${revenue}</p>
            <h3 className="text-xs font-semibold mb-1 text-teal-400">
              Revenue History
            </h3>
            {renderRevenueBars()}
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">System Status</h2>
            <pre className="text-[10px] whitespace-pre-wrap max-h-40 overflow-auto bg-black/80 border border-teal-500/30 rounded p-2">
              {systemStatus ? JSON.stringify(systemStatus, null, 2) : "No data"}
            </pre>
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">Engine Status</h2>
            <pre className="text-[10px] whitespace-pre-wrap max-h-40 overflow-auto bg-black/80 border border-teal-500/30 rounded p-2">
              {engineStatus ? JSON.stringify(engineStatus, null, 2) : "No data"}
            </pre>
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            {notifications.length === 0 ? (
              <p className="text-xs text-teal-400">No notifications.</p>
            ) : (
              <ul className="space-y-1 text-xs max-h-40 overflow-auto">
                {notifications.map((n: AnyObj, i: number) => (
                  <li
                    key={n.id || i}
                    className="border-b border-teal-500/20 pb-1"
                  >
                    {n.message || "Notification"}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border border-teal-500 rounded-lg bg-black/60 p-4">
            <h2 className="text-lg font-semibold mb-2">Voice Assistant</h2>
            <p className="text-xs text-teal-400 mb-2">
              Text-based for now. Sends to backend /voice.
            </p>
            <input
              className="bg-black/80 border border-teal-500/50 rounded px-2 py-1 text-teal-200 text-xs mb-2 w-full"
              placeholder="Ask Madison something..."
              value={voiceInput}
              onChange={(e) => setVoiceInput(e.target.value)}
            />
            <button
              onClick={handleVoiceSend}
              className="px-3 py-1 border border-teal-500 rounded bg-black/60 hover:bg-teal-500 hover:text-black transition text-xs mb-2"
            >
              Send
            </button>
            <div className="text-[10px] bg-black/80 border border-teal-500/30 rounded p-2 min-h-[40px]">
              {voiceResponse || "No response yet."}
            </div>
          </div>
        </div>
      </div>

      {terminalOpen && (
        <div className="fixed inset-x-0 bottom-0 z-20 bg-black/95 border-t border-teal-500 p-3 md:p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm md:text-base font-semibold">
              Madison Operator Terminal
            </h2>
            <button
              onClick={() => setTerminalOpen(false)}
              className="text-xs px-2 py-1 border border-teal-500 rounded hover:bg-teal-500 hover:text-black transition"
            >
              Close
            </button>
          </div>
          <div className="
