"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  Browser,
  DeviceMobile,
  PlugsConnected,
  Sparkle,
} from "@phosphor-icons/react";
import { VIEWPORT_ONCE } from "@/lib/viewport";
import KaliIcon from "@/components/ui/KaliIcon";

const LEVELS: {
  level: number;
  title: string;
  icon: Icon;
  color: string;
}[] = [
  {
    level: 1,
    title: "Presencia digital",
    icon: Browser,
    color: "border-kali-cyan/40 text-kali-cyan shadow-[0_0_40px_-8px_rgba(34,211,238,0.4)]",
  },
  {
    level: 2,
    title: "Automatización",
    icon: ArrowsClockwise,
    color: "border-kali-accent/40 text-kali-accent shadow-[0_0_40px_-8px_rgba(124,92,255,0.4)]",
  },
  {
    level: 3,
    title: "Inteligencia Artificial",
    icon: Sparkle,
    color: "border-purple-400/40 text-purple-300 shadow-[0_0_40px_-8px_rgba(167,139,250,0.35)]",
  },
  {
    level: 4,
    title: "Software y aplicaciones",
    icon: DeviceMobile,
    color: "border-white/25 text-white/90 shadow-[0_0_40px_-8px_rgba(255,255,255,0.15)]",
  },
  {
    level: 5,
    title: "Ecosistema completo",
    icon: PlugsConnected,
    color: "border-kali-accent/50 text-white shadow-[0_0_48px_-6px_rgba(124,92,255,0.5)]",
  },
];

export default function Scalability() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="escalabilidad"
      className="relative section-pad px-5 sm:px-6 overflow-hidden border-y border-white/[0.04] perf-defer-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(124,92,255,0.04)_50%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <m.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-kali-accent/80 mb-4">
            Escalabilidad
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12] text-gradient-accent">
            Empieza donde lo necesites.
            <br className="hidden sm:block" />
            <span className="text-white/70"> Crece cuando lo decidas.</span>
          </h2>
        </m.div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[0.65rem] sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-kali-cyan/60 via-kali-accent/50 to-white/20" />

          <ol className="space-y-6 sm:space-y-8">
            {LEVELS.map((item, i) => {
              const isLast = i === LEVELS.length - 1;
              return (
                <m.li
                  key={item.title}
                  initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.55, delay: reduceMotion ? 0 : i * 0.06 }}
                  className="relative flex items-center gap-5 sm:gap-6"
                >
                  <div
                    className={`absolute -left-8 sm:-left-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 bg-kali-black flex items-center justify-center text-[10px] font-bold ${item.color}`}
                  >
                    {item.level}
                  </div>

                  <div
                    className={`group/level flex-1 flex items-center gap-4 sm:gap-5 rounded-2xl border bg-white/[0.02] px-4 sm:px-6 py-4 sm:py-5 transition-colors duration-300 hover:bg-white/[0.04] ${
                      isLast
                        ? "border-kali-accent/30 bg-gradient-to-r from-kali-accent/10 to-transparent"
                        : "border-white/[0.08]"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/level:scale-[1.03] ${item.color}`}
                    >
                      <KaliIcon icon={item.icon} size="md" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/35 mb-0.5">
                        Nivel {item.level}
                      </p>
                      <p className="text-base sm:text-lg font-semibold text-white tracking-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </m.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
