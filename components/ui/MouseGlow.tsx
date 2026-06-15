"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
  });

  useEffect(() => {
    if (!enabled) return;

    const handle = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handle);

    return () => {
      window.removeEventListener("mousemove", handle);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <m.div
      className="pointer-events-none fixed z-[1] hidden md:block"
      animate={{ x: pos.x - 250, y: pos.y - 250 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      style={{ width: 500, height: 500 }}
    >
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.18),transparent_60%)]" />
    </m.div>
  );
}
