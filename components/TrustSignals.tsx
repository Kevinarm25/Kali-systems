"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import {
  ChartLineUp,
  ChatCircle,
  Headset,
  MapPin,
  ShieldCheck,
  SquaresFour,
  TrendUp,
  Users,
} from "@phosphor-icons/react";
import KaliIcon from "@/components/ui/KaliIcon";
import { ENTER_FAST, stagger } from "@/lib/motion";

const SIGNALS: { icon: Icon; label: string }[] = [
  { icon: ShieldCheck, label: "Implementación guiada" },
  { icon: Headset, label: "Soporte personalizado" },
  { icon: TrendUp, label: "Escalable por etapas" },
  { icon: MapPin, label: "Compatible con negocios locales" },
  { icon: ChatCircle, label: "Integración con WhatsApp" },
  { icon: Users, label: "Automatización + intervención humana" },
  { icon: ChartLineUp, label: "Dashboard de seguimiento" },
];

export default function TrustSignals() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-12 sm:py-16 px-5 sm:px-6 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] uppercase tracking-[0.22em] text-white/35 mb-6 sm:mb-8">
          Por qué confiar en KALI
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {SIGNALS.map((s, i) => (
            <m.span
              key={s.label}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -72px 0px" }}
              transition={{ ...ENTER_FAST, delay: reduceMotion ? 0 : stagger(i, 0.02) }}
              className="group inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs sm:text-sm text-white/60 hover:text-white/85 hover:border-kali-accent/30 transition-colors duration-300"
            >
              <KaliIcon
                icon={s.icon}
                size="xs"
                className="text-kali-accent/80 group-hover:text-kali-accent transition-colors duration-300"
              />
              {s.label}
            </m.span>
          ))}
        </div>
      </div>
    </section>
  );
}
