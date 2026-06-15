"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import PremiumSection from "@/components/ui/PremiumSection";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <PremiumSection className="section-pad px-5 sm:px-6" glow="dual">
      <m.div
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.1),transparent_70%)] pointer-events-none" />

        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-gradient-accent">
          Tu negocio no necesita más herramientas.
        </h2>
        <p className="relative mt-5 sm:mt-6 text-base sm:text-lg text-white/55 leading-relaxed">
          Necesita que todas trabajen juntas.
        </p>

        <Link
          href="/#contacto"
          className="relative mt-8 sm:mt-10 btn-premium-light group inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm hover:scale-[1.02] transition-transform duration-300"
        >
          Hablemos de tu proyecto
          <ArrowUpRight size={16} weight="regular" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </m.div>
    </PremiumSection>
  );
}
