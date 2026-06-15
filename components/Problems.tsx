"use client";

import { m, useReducedMotion } from "framer-motion";
import { VIEWPORT_ONCE } from "@/lib/viewport";

const OUTCOMES = [
  {
    num: "01",
    title: "Más clientes",
    description: "Generamos más oportunidades para tu negocio.",
    accent: "from-kali-cyan/20 to-transparent",
  },
  {
    num: "02",
    title: "Más tiempo libre",
    description:
      "Automatizamos tareas repetitivas para que puedas enfocarte en crecer.",
    accent: "from-kali-accent/20 to-transparent",
  },
  {
    num: "03",
    title: "Más orden",
    description: "Centralizamos procesos y seguimiento.",
    accent: "from-white/10 to-transparent",
  },
  {
    num: "04",
    title: "Mejor atención",
    description: "Respondemos más rápido y damos seguimiento constante.",
    accent: "from-kali-cyan/15 to-transparent",
  },
  {
    num: "05",
    title: "Más control",
    description: "Visualiza todo desde un solo lugar.",
    accent: "from-kali-accent/15 to-transparent",
  },
];

export default function Problems() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="problemas"
      className="relative section-pad px-5 sm:px-6 overflow-hidden border-t border-white/[0.04] perf-defer-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(124,92,255,0.06)_0%,transparent_42%,rgba(34,211,238,0.04)_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <m.div
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-kali-accent/80 mb-4">
              Problemas y soluciones
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.08] text-gradient">
              Resultados que importan, no herramientas
            </h2>
            <p className="mt-5 text-sm sm:text-base text-white/45 leading-relaxed max-w-sm">
              Nos enfocamos en lo que tu negocio gana: más ventas, menos caos y
              decisiones más claras.
            </p>
          </m.div>

          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-[1.15rem] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-kali-accent/50 via-kali-cyan/30 to-transparent hidden sm:block" />

              <ol className="space-y-0">
                {OUTCOMES.map((item, i) => (
                  <m.li
                    key={item.title}
                    initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.55, delay: reduceMotion ? 0 : i * 0.06 }}
                    className="group relative flex gap-5 sm:gap-8 py-7 sm:py-9 border-b border-white/[0.06] last:border-b-0"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -mx-4 px-4 pointer-events-none`}
                    />

                    <div className="relative shrink-0 flex flex-col items-center sm:items-start">
                      <span className="hidden sm:flex w-12 h-12 rounded-full border border-kali-accent/30 bg-kali-black items-center justify-center text-xs font-semibold text-kali-accent/90 shadow-[0_0_24px_-6px_rgba(124,92,255,0.5)]">
                        {item.num}
                      </span>
                      <span className="sm:hidden text-2xl font-semibold text-white/15 tabular-nums">
                        {item.num}
                      </span>
                    </div>

                    <div className="relative min-w-0 pt-0.5 sm:pt-2">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </m.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
