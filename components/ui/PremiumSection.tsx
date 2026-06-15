"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const GLOW_BACKGROUND: Record<string, string> = {
  purple:
    "radial-gradient(ellipse 95% 65% at 50% -8%, rgba(124,92,255,0.2) 0%, transparent 58%), radial-gradient(ellipse 60% 45% at 95% 40%, rgba(124,92,255,0.07) 0%, transparent 50%)",
  cyan:
    "radial-gradient(ellipse 95% 60% at 50% 102%, rgba(34,211,238,0.14) 0%, transparent 55%), radial-gradient(ellipse 55% 40% at 5% 60%, rgba(34,211,238,0.06) 0%, transparent 50%)",
  dual:
    "radial-gradient(ellipse 85% 55% at 15% -5%, rgba(124,92,255,0.16) 0%, transparent 55%), radial-gradient(ellipse 85% 50% at 85% 100%, rgba(34,211,238,0.11) 0%, transparent 55%)",
  cta:
    "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(124,92,255,0.22) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 50% 110%, rgba(34,211,238,0.14) 0%, transparent 52%)",
  contact:
    "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(124,92,255,0.18) 0%, transparent 55%), radial-gradient(ellipse 75% 50% at 100% 80%, rgba(34,211,238,0.09) 0%, transparent 50%)",
};

type PremiumSectionProps = {
  id?: string;
  className?: string;
  glow: keyof typeof GLOW_BACKGROUND;
  children: ReactNode;
};

export default function PremiumSection({
  id,
  className = "",
  glow,
  children,
}: PremiumSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <m.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: GLOW_BACKGROUND[glow] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <m.div
        className="relative z-[1]"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.72,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </m.div>
    </section>
  );
}
