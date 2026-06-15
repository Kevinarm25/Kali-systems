"use client";

import { useReducedMotion } from "framer-motion";

type OrbColor = "purple" | "cyan" | "pink";

type GradientOrbProps = {
  className?: string;
  color?: OrbColor;
  delayClass?: string;
  /** @deprecated Use delayClass — kept for compatibility */
  delay?: number;
};

const DELAY_CLASS: Record<number, string> = {
  2: "kali-orb-delay-2",
  4: "kali-orb-delay-4",
};

export default function GradientOrb({
  className = "",
  color = "purple",
  delayClass = "",
  delay,
}: GradientOrbProps) {
  const resolvedDelayClass =
    delayClass || (delay !== undefined ? DELAY_CLASS[delay] ?? "" : "");
  const reduceMotion = useReducedMotion();
  const colors: Record<OrbColor, string> = {
    purple: "rgba(124,92,255,0.3)",
    cyan: "rgba(34,211,238,0.22)",
    pink: "rgba(236,72,153,0.19)",
  };

  return (
    <div
      className={`absolute rounded-full pointer-events-none hidden md:block gpu-layer ${
        reduceMotion ? "opacity-55" : `kali-orb-pulse ${resolvedDelayClass}`
      } ${className}`}
      style={{
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
        filter: "blur(32px)",
      }}
    />
  );
}
