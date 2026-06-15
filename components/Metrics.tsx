"use client";
import { m, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import { Clock, Heart, SquaresFour, TrendUp } from "@phosphor-icons/react";
import SectionHeader from "@/components/ui/SectionHeader";
import KaliIcon from "@/components/ui/KaliIcon";
import { ENTER, stagger } from "@/lib/motion";

const METRICS: {
  icon: Icon;
  value: string;
  label: string;
  desc: string;
}[] = [
  {
    icon: Clock,
    value: "24/7",
    label: "Presencia constante",
    desc: "Tu negocio sigue atendiendo cuando tú descansas.",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Clientes cuidados",
    desc: "Nadie se queda sin respuesta ni sin seguimiento.",
  },
  {
    icon: SquaresFour,
    value: "1",
    label: "Ecosistema unificado",
    desc: "Canales, agenda y contactos en la misma línea.",
  },
  {
    icon: TrendUp,
    value: "+",
    label: "Espacio para crecer",
    desc: "Infraestructura que escala con tu ambición.",
  },
];

export default function Metrics() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative section-pad px-5 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          label="Impacto"
          title="Confianza que se nota desde el primer contacto"
          align="center"
          className="max-w-3xl mx-auto"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {METRICS.map((metric, i) => (
            <m.div
              key={metric.label}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -72px 0px" }}
              transition={{
                ...ENTER,
                delay: reduceMotion ? 0 : stagger(i, 0.025),
              }}
              className="group relative glass rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden hover:border-white/20 transition-colors duration-300"
            >
              <div className="absolute -top-10 -right-10 hidden w-28 h-28 bg-kali-accent/8 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block" />
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-[1.03]">
                  <KaliIcon icon={metric.icon} size="md" className="text-kali-cyan" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-gradient-accent mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-[11px] sm:text-xs text-white/45 leading-relaxed">
                  {metric.desc}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
