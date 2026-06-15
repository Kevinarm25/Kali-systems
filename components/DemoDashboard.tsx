"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import {
  Bell,
  CalendarCheck,
  ChartBar,
  Chats,
  CheckCircle,
  UserPlus,
} from "@phosphor-icons/react";
import PremiumSection from "@/components/ui/PremiumSection";
import SectionHeader from "@/components/ui/SectionHeader";
import KaliIcon from "@/components/ui/KaliIcon";
import { ENTER, ENTER_FAST } from "@/lib/motion";
import { WHATSAPP_DEMO } from "@/lib/constants";
import { VIEWPORT_ONCE } from "@/lib/viewport";

const STEPS: {
  icon: Icon;
  title: string;
  detail: string;
  time: string;
  color: string;
}[] = [
  {
    icon: UserPlus,
    title: "Nuevo prospecto",
    detail: "María escribió desde Instagram",
    time: "10:24",
    color: "text-pink-300",
  },
  {
    icon: Chats,
    title: "Conversación atendida",
    detail: "Respuesta clara con el tono de tu marca",
    time: "10:24",
    color: "text-emerald-300",
  },
  {
    icon: CalendarCheck,
    title: "Cita agendada",
    detail: "Viernes 11:00 · Confirmación enviada",
    time: "10:26",
    color: "text-kali-cyan",
  },
  {
    icon: Bell,
    title: "Recordatorio enviado",
    detail: "24 h antes de la cita",
    time: "Jue 10:26",
    color: "text-amber-200/90",
  },
  {
    icon: CheckCircle,
    title: "Cliente en seguimiento",
    detail: "Estado: Confirmada · Próximo paso listo",
    time: "Activo",
    color: "text-kali-accent",
  },
  {
    icon: ChartBar,
    title: "Dashboard organizado",
    detail: "Contactos, citas y conversaciones en un solo lugar",
    time: "En vivo",
    color: "text-white/80",
  },
];

export default function DemoDashboard() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, 3200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <PremiumSection id="demo" className="section-pad px-5 sm:px-6" glow="cyan">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Así se ve en acción"
          title="Tu operación, clara desde el primer día"
          description="Una vista tipo dashboard para entender cómo KALI ordena cada contacto sin complicarte."
          align="center"
          className="max-w-3xl mx-auto"
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            className="relative glass-strong rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kali-cyan/50 to-transparent" />
            <div className="px-4 sm:px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  KALI Dashboard
                </p>
                <p className="text-sm font-medium text-white/80 mt-0.5">
                  Vista general · Hoy
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400/90 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                En vivo
              </span>
            </div>

            <div className="p-4 sm:p-6 space-y-3 min-h-[280px] sm:min-h-[320px]">
              <AnimatePresence mode="wait">
                {STEPS.map(
                  (step, i) =>
                    i === active && (
                      <m.div
                        key={step.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ ...ENTER_FAST }}
                        className="rounded-2xl border border-kali-accent/25 bg-kali-accent/10 p-4 sm:p-5"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                            <KaliIcon icon={step.icon} size="md" className={step.color} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="font-semibold text-white text-sm sm:text-base">
                                {step.title}
                              </p>
                              <span className="text-[10px] text-white/35 shrink-0">
                                {step.time}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-white/55 mt-1">
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      </m.div>
                    )
                )}
              </AnimatePresence>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  { l: "Prospectos", v: "12" },
                  { l: "Citas hoy", v: "5" },
                  { l: "Seguimiento", v: "8" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center"
                  >
                    <p className="text-lg font-semibold text-white">{s.v}</p>
                    <p className="text-[10px] text-white/40 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            className="flex flex-col justify-center"
          >
            <ol className="space-y-2 sm:space-y-3">
              {STEPS.map((step, i) => {
                const isActive = i === active;
                return (
                  <li key={step.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`w-full text-left rounded-xl sm:rounded-2xl px-4 py-3.5 sm:py-4 border transition-all duration-300 ${
                        isActive
                          ? "border-kali-accent/35 bg-white/[0.05]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/12"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <KaliIcon
                          icon={step.icon}
                          size="sm"
                          className={`shrink-0 transition-colors duration-300 ${
                            isActive ? step.color : "text-white/35"
                          }`}
                        />
                        <div className="min-w-0">
                          <p
                            className={`text-sm font-medium ${
                              isActive ? "text-white" : "text-white/55"
                            }`}
                          >
                            {step.title}
                          </p>
                          <p className="text-xs text-white/40 truncate">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>

            <a
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 btn-premium-ghost glass inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium w-full sm:w-auto"
            >
              Ver cómo funcionaría en mi negocio
            </a>
          </m.div>
        </div>
      </div>
    </PremiumSection>
  );
}
