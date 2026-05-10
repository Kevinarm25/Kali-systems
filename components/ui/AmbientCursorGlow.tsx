"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function AmbientCursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 42, damping: 24, mass: 0.8 });
  const smoothY = useSpring(y, { stiffness: 42, damping: 24, mass: 0.8 });

  useEffect(() => {
    if (reduceMotion) return;

    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!pointerFine) return;

    setEnabled(true);
    x.set(window.innerWidth / 2 - 320);
    y.set(window.innerHeight / 2 - 320);

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - 320);
      y.set(event.clientY - 320);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[0] hidden h-[640px] w-[640px] md:block mix-blend-screen"
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.16)_0%,rgba(124,92,255,0.075)_26%,transparent_62%)] blur-3xl" />
      <div className="absolute inset-16 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08)_0%,rgba(34,211,238,0.035)_30%,transparent_66%)] blur-2xl" />
    </motion.div>
  );
}
