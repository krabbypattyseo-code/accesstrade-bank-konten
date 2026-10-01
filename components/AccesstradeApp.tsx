"use client";

import { useEffect, useRef, useState } from "react";
import { SHELL_HTML } from "@/lib/shell";
import {
  destroyAccesstradeMockup,
  initAccesstradeMockup,
} from "@/lib/mockup";

export default function AccesstradeApp() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Empty host only — avoid React children overwriting injected DOM.
    root.innerHTML = SHELL_HTML;
    try {
      initAccesstradeMockup();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("[AccesstradeApp] init failed:", err);
      setError(message);
      root.innerHTML = "";
    }

    return () => {
      destroyAccesstradeMockup();
      root.innerHTML = "";
    };
  }, []);

  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
          color: "#b91c1c",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Gagal memuat dashboard Accesstrade.
        <div style={{ marginTop: 8, fontWeight: 600, color: "#4b5563" }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      suppressHydrationWarning
      aria-label="Dashboard Accesstrade"
    />
  );
}
