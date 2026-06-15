"use client";

import { useReducedMotion } from "framer-motion";

type AnimatedGridProps = {
  centerGlow?: boolean;
};

export default function AnimatedGrid({ centerGlow = true }: AnimatedGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-layer">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-kali-black via-transparent to-kali-black" />
      {centerGlow && (
        <div
          className={`absolute -top-1/3 left-1/2 hidden w-[900px] h-[900px] -translate-x-1/2 rounded-full md:block ${
            reduceMotion ? "opacity-55" : "kali-grid-glow"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,255,0.12) 0%, rgba(34,211,238,0.035) 35%, transparent 70%)",
            filter: "blur(28px)",
          }}
        />
      )}
    </div>
  );
}
