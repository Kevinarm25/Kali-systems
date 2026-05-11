"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function AmbientCursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!pointerFine) return;

    const initialize = () => {
      const startX = window.innerWidth / 2 - 280;
      const startY = window.innerHeight / 2 - 280;
      pointer.current = { x: startX, y: startY };
      current.current = { x: startX, y: startY };
      setEnabled(true);
    };

    const hasIdleCallback = "requestIdleCallback" in window;
    const idleId = hasIdleCallback
      ? window.requestIdleCallback(initialize, { timeout: 700 })
      : window.setTimeout(initialize, 250);

    const tick = () => {
      current.current.x += (pointer.current.x - current.current.x) * 0.08;
      current.current.y += (pointer.current.y - current.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      frame.current = requestAnimationFrame(tick);
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer.current.x = event.clientX - 280;
      pointer.current.y = event.clientY - 280;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
      if (hasIdleCallback) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, [reduceMotion]);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[0] hidden h-[560px] w-[560px] md:block mix-blend-screen will-change-transform"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.12)_0%,rgba(124,92,255,0.055)_28%,transparent_62%)] blur-2xl" />
      <div className="absolute inset-20 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.06)_0%,rgba(34,211,238,0.025)_32%,transparent_66%)] blur-xl" />
    </div>
  );
}
