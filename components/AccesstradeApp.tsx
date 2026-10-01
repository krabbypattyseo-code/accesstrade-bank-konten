"use client";

import { useEffect, useRef } from "react";
import { SHELL_HTML } from "@/lib/shell";
import {
  destroyAccesstradeMockup,
  initAccesstradeMockup,
} from "@/lib/mockup";

export default function AccesstradeApp() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.innerHTML = SHELL_HTML;
    initAccesstradeMockup();

    return () => {
      destroyAccesstradeMockup();
      root.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      suppressHydrationWarning
      aria-busy="true"
      aria-label="Dashboard Accesstrade"
    >
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4b5563",
          fontWeight: 700,
        }}
      >
        Memuat dashboard Accesstrade…
      </div>
    </div>
  );
}
