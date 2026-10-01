"use client";
import React from "react";

interface PanelProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  error?: string | null;
}

export default function Panel({
  title,
  children,
  className = "",
  loading = false,
  error = null,
}: PanelProps) {
  return (
    <div className={`bg-gray-900 border border-cyan-500/30 rounded-xl p-5 shadow-lg ${className}`}>
      {title && (
        <h2 className="text-sm font-semibold text-cyan-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block" />
          {title}
        </h2>
      )}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="w-7 h-7 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-3 text-red-400 text-xs mb-4">
          ⚠ {error}
        </div>
      )}
      {!loading && children}
    </div>
  );
}
