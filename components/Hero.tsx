"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedGrid from "./ui/AnimatedGrid";
import GradientOrb from "./ui/GradientOrb";
import { WHATSAPP_LINK } from "@/lib/constants";

const TITLE = "La infraestructura del negocio moderno.";
const SUBTITLE = "Impulsada por IA.";
const BODY =
  "Automatizamos mensajes, seguimientos y procesos para que tu negocio opere más rápido, más organizado y sin perder clientes.";

function WordReveal({
  text,
  delay = 0,
  reduceMotion = false,
}: {
  text: string;
  delay?: number;
  reduceMotion?: boolean;
}) {
  const words = useMemo(() => text.split(" "), [text]);

  if (reduceMotion) {
    return <>{text}</>;
  }

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
      aria-hidden="true"
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: {
              opacity: 0,
              y: 14,
              filter: "blur(6px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.34,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
      <AnimatedGrid />
      <GradientOrb className="w-[500px] h-[500px] -left-40 top-40" color="purple" />
      <GradientOrb className="w-[400px] h-[400px] -right-20 bottom-20" color="cyan" delay={2} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-kali-accent" />
          <span className="text-xs text-white/70 tracking-wide">
            IA que trabaja por tu negocio, las 24 horas
          </span>
        </motion.div>

        <div className="relative [filter:drop-shadow(0_0_42px_rgba(124,92,255,0.11))]">
        <h1
  className="relative text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] leading-[1.08] text-white [text-shadow:0_0_30px_rgba(124,92,255,0.10)]"
  aria-label={TITLE}
>
  <WordReveal text={TITLE} delay={0.1} reduceMotion={!!reduceMotion} />
  {!reduceMotion && (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 block bg-[linear-gradient(105deg,transparent_0%,transparent_34%,rgba(167,139,250,0.12)_43%,rgba(196,181,253,0.72)_50%,rgba(124,92,255,0.18)_57%,transparent_68%,transparent_100%)] bg-[length:230%_100%] bg-clip-text text-transparent"
      initial={{ opacity: 0, backgroundPosition: "180% 50%" }}
      animate={{
        opacity: [0, 0.75, 0],
        backgroundPosition: ["180% 50%", "-80% 50%"],
      }}
      transition={{
        delay: 1.05,
        duration: 2.8,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatDelay: 4.5,
      }}
    >
      {TITLE}
    </motion.span>
  )}
</h1>

          <motion.p
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/50 font-medium tracking-tight"
            aria-label={SUBTITLE}
          >
            <WordReveal text={SUBTITLE} delay={0.45} reduceMotion={!!reduceMotion} />
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          {BODY}
        </motion.p>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium-light group relative z-[1] inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-medium text-sm hover:scale-[1.03] transition-transform duration-300"
          >
            Hablar por WhatsApp
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-[1]" />
          </a>

          <a
            href="#services"
            className="btn-premium-ghost glass relative z-[1] inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors duration-300"
          >
            Ver qué hacemos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-white/30"
        >
          <span>Respuestas al instante</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Siempre disponible</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Atención moderna</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Hecho para crecer</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Desliza</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
