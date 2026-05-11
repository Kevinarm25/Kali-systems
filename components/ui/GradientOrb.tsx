"use client";

import { motion, useReducedMotion } from "framer-motion";

type OrbColor = "purple" | "cyan" | "pink";

type GradientOrbProps = {
  className?: string;
  color?: OrbColor;
  delay?: number;
};

export default function GradientOrb({
  className = "",
  color = "purple",
  delay = 0,
}: GradientOrbProps) {
  const reduceMotion = useReducedMotion();
  const colors: Record<OrbColor, string> = {
    purple: "rgba(124,92,255,0.26)",
    cyan: "rgba(34,211,238,0.18)",
    pink: "rgba(236,72,153,0.16)",
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none hidden md:block ${className}`}
      style={{
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
        filter: "blur(44px)",
      }}
      animate={reduceMotion ? { opacity: 0.55 } : { scale: [1, 1.08, 1], opacity: [0.42, 0.68, 0.42] }}
      transition={{ duration: 14, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
