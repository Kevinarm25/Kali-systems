"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import {
  CalendarCheck,
  Chats,
  GitBranch,
  SealCheck,
  Sparkle,
  UserCircle,
} from "@phosphor-icons/react";
import { VIEWPORT_ONCE } from "@/lib/viewport";
import { ENTER, stagger } from "@/lib/motion";
import { processIconClass, processIconClassSm } from "@/lib/iconStyles";
import KaliIcon from "@/components/ui/KaliIcon";

const STEPS: { icon: Icon; label: string; short: string }[] = [
  { icon: UserCircle, label: "Cliente escribe", short: "Contacto" },
  { icon: Chats, label: "Sistema recibe el mensaje", short: "Recepción" },
  { icon: Sparkle, label: "Se clasifica automáticamente", short: "Clasificación" },
  { icon: CalendarCheck, label: "Se agenda", short: "Agenda" },
  { icon: GitBranch, label: "Se da seguimiento", short: "Seguimiento" },
  { icon: SealCheck, label: "Se convierte en cliente", short: "Cliente" },
];

function StepIcon({ icon, size = "md" }: { icon: Icon; size?: "md" | "sm" }) {
  return (
    <KaliIcon
      icon={icon}
      size={size === "md" ? "lg" : "md"}
      className={`transition-transform duration-300 group/step:hover:scale-105 ${
        size === "md" ? processIconClass : processIconClassSm
      }`}
    />
  );
}

function FlowConnector({ active }: { active: boolean }) {
  return (
    <div className="hidden lg:flex items-center flex-1 min-w-[24px] max-w-[48px] px-1">
      <div className="relative w-full h-px bg-white/10 overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-kali-accent to-kali-cyan ${
            active ? "kali-flow-shimmer" : "-translate-x-full"
          }`}
        />
      </div>
    </div>
  );
}

export default function ProcessFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proceso"
      className="relative section-pad px-5 sm:px-6 overflow-hidden perf-defer-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,211,238,0.08),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <m.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={ENTER}
          className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-kali-accent/80 mb-4">
            Cómo funciona
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gradient">
            Del primer mensaje al cliente confirmado
          </h2>
        </m.div>

        <div className="hidden lg:flex items-start justify-between gap-0 max-w-6xl mx-auto">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-start flex-1 min-w-0">
              <m.div
                initial={{ opacity: reduceMotion ? 1 : 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ ...ENTER, delay: stagger(i, 0.025) }}
                className="group/step flex flex-col items-center text-center flex-1 min-w-0"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-2xl bg-kali-accent/15 blur-lg scale-125 opacity-50 transition-opacity duration-300 group-hover/step:opacity-70" />
                  <div className="relative w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 group-hover/step:border-white/15 group-hover/step:bg-white/[0.06]">
                    <StepIcon icon={step.icon} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-kali-accent text-[10px] font-bold flex items-center justify-center text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white/80 leading-snug px-1">
                  {step.label}
                </p>
              </m.div>
              {i < STEPS.length - 1 && (
                <FlowConnector active={!reduceMotion} />
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden max-w-md mx-auto">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <m.div
                key={step.label}
                initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ ...ENTER, delay: stagger(i, 0.02) }}
                className="group/step relative flex gap-4 pb-8 last:pb-0"
              >
                {!isLast && (
                  <div className="absolute left-[1.65rem] top-12 bottom-0 w-px bg-gradient-to-b from-kali-accent/50 to-transparent" />
                )}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 group-hover/step:border-white/15">
                    <StepIcon icon={step.icon} size="sm" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-kali-accent text-[9px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 mb-1">
                    {step.short}
                  </p>
                  <p className="text-base font-medium text-white/85">
                    {step.label}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
