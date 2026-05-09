"use client";

import { motion } from "framer-motion";

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
  const colors: Record<OrbColor, string> = {
    purple: "rgba(124,92,255,0.35)",
    cyan: "rgba(34,211,238,0.25)",
    pink: "rgba(236,72,153,0.22)",
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
      transition={{ duration: 10, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
