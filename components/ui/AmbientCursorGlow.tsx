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
  const active = useRef(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!pointerFine) return;

    const initialize = () => {
      const startX = window.innerWidth / 2 - 240;
      const startY = window.innerHeight / 2 - 240;
      pointer.current = { x: startX, y: startY };
      current.current = { x: startX, y: startY };
      setEnabled(true);
    };

    const hasIdleCallback = "requestIdleCallback" in window;
    const idleId = hasIdleCallback
      ? window.requestIdleCallback(initialize, { timeout: 600 })
      : window.setTimeout(initialize, 250);

    const tick = () => {
      if (!active.current) {
        frame.current = null;
        return;
      }

      const dx = pointer.current.x - current.current.x;
      const dy = pointer.current.y - current.current.y;

      if (Math.abs(dx) > 0.35 || Math.abs(dy) > 0.35) {
        current.current.x += dx * 0.12;
        current.current.y += dy * 0.12;

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
        }
      }

      frame.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (frame.current === null) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer.current.x = event.clientX - 240;
      pointer.current.y = event.clientY - 240;
      active.current = true;
      startLoop();

      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        active.current = false;
      }, 120);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
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
      className="pointer-events-none fixed left-0 top-0 z-[0] hidden h-[480px] w-[480px] md:block mix-blend-screen gpu-layer"
      style={{
        background:
          "radial-gradient(circle at center, rgba(124,92,255,0.11) 0%, rgba(124,92,255,0.04) 28%, rgba(34,211,238,0.03) 45%, transparent 68%)",
        filter: "blur(40px)",
      }}
    />
  );
}
