"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ENTER_HERO, MOTION_EASE } from "@/lib/motion";
import AnimatedGrid from "./ui/AnimatedGrid";
import GradientOrb from "./ui/GradientOrb";

function HeroBeams({ reduceMotion }: { reduceMotion: boolean | null }) {
  const beamClass = reduceMotion
    ? "opacity-[0.35]"
    : "kali-beam-line";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-layer">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        aria-hidden
      >
        <defs>
          <linearGradient id="beam-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c5cff" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c5cff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[120, 280, 440, 600, 760, 920].map((x, i) => (
          <line
            key={x}
            x1={x}
            y1={0}
            x2={x + 180}
            y2={800}
            stroke="url(#beam-a)"
            strokeWidth="1"
            className={`${beamClass}${!reduceMotion && i > 0 ? ` kali-beam-line-${i}` : ""}`}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
      <AnimatedGrid centerGlow={false} />
      <HeroBeams reduceMotion={reduceMotion} />
      <GradientOrb
        className="w-[min(560px,95vw)] h-[min(560px,95vw)] -left-48 top-20"
        color="purple"
      />
      <GradientOrb
        className="w-[min(440px,85vw)] h-[min(440px,85vw)] -right-32 bottom-10"
        color="cyan"
        delayClass="kali-orb-delay-2"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: MOTION_EASE }}
          className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-kali-accent/25 blur-lg scale-110" />
            <Image
              src="/logo-icon.png"
              alt="KALI Systems"
              width={72}
              height={72}
              priority
              sizes="72px"
              className="relative w-14 h-14 sm:w-[4.5rem] sm:h-[4.5rem] object-contain drop-shadow-[0_0_24px_rgba(124,92,255,0.45)]"
            />
          </div>
          <div className="text-left">
            <p className="text-lg sm:text-xl font-bold tracking-[0.18em] text-white leading-none">
              KALI
            </p>
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.32em] text-white/45 mt-1">
              SYSTEMS
            </p>
          </div>
        </m.div>

        <m.h1
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTER_HERO, delay: reduceMotion ? 0 : 0.05, ease: MOTION_EASE }}
          className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.035em] leading-[1.1] text-gradient-accent px-1"
        >
          Hacemos crecer negocios con tecnología.
        </m.h1>

        <m.p
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTER_HERO, delay: reduceMotion ? 0 : 0.1, ease: MOTION_EASE }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          Sitios web, inteligencia artificial, automatización, software y
          herramientas diseñadas para ayudarte a vender más, ahorrar tiempo y
          mantener tu negocio organizado.
        </m.p>

        <m.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ENTER_HERO, delay: reduceMotion ? 0 : 0.15, ease: MOTION_EASE }}
          className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
        >
          <Link
            href="/contacto"
            className="btn-premium-light group relative z-[1] inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm hover:scale-[1.02] transition-transform duration-300"
          >
            Agendar una llamada
            <ArrowUpRight size={16} weight="regular" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-[1]" />
          </Link>

          <Link
            href="/#problemas"
            className="btn-premium-ghost glass relative z-[1] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors duration-300"
          >
            Conocer soluciones
          </Link>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.22, duration: 0.45, ease: MOTION_EASE }}
        className="relative z-10 mt-14 sm:mt-20 w-full max-w-3xl mx-auto px-5 sm:px-6"
      >
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md overflow-hidden shadow-[0_32px_80px_-40px_rgba(124,92,255,0.35)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kali-accent/50 to-transparent" />
          <div className="px-4 sm:px-6 py-3 border-b border-white/[0.06] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white/40">
              Plataforma KALI · En vivo
            </span>
          </div>
          <div className="p-4 sm:p-6 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { label: "Oportunidades", value: "↑ 34%" },
              { label: "Tiempo ahorrado", value: "12h/sem" },
              { label: "Seguimiento", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-3 sm:py-4 text-center"
              >
                <p className="text-base sm:text-xl font-semibold text-gradient-accent">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-white/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </m.div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
        <div
          className={`w-px h-8 bg-gradient-to-b from-white/40 to-transparent ${
            reduceMotion ? "" : "kali-scroll-hint"
          }`}
        />
      </div>
    </section>
  );
}
