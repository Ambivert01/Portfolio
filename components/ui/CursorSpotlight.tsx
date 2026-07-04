"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, hsl(var(--accent) / 0.07), transparent 60%)`;
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-30 hidden md:block" aria-hidden />;
}
