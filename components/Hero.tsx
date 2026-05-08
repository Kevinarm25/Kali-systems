"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedGrid from "./ui/AnimatedGrid";
import GradientOrb from "./ui/GradientOrb";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
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
            Infraestructura de automatización con IA de nueva generación
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] leading-[1.02] text-gradient-accent"
        >
          El sistema operativo <br className="hidden sm:block" />
          para negocios inteligentes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-7 text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          KALI Systems crea agentes de IA que conversan, califican, dan seguimiento y convierten —
          en WhatsApp, Instagram y todo tu CRM. Siempre activos. Siempre cerrando.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-medium text-sm hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            Hablar por WhatsApp
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 glass px-6 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition"
          >
            Explorar sistemas
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-white/30"
        >
          <span>IA en tiempo real</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Operación 24/7</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Nivel empresarial</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Diseñado para escalar</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Desliza</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
