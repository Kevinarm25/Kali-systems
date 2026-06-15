"use client";

import { ArrowRight, Check, Sparkle } from "@phosphor-icons/react";
import { m, useReducedMotion } from "framer-motion";
import KaliIcon from "@/components/ui/KaliIcon";
import {
  WHATSAPP_ECOSYSTEM,
  WHATSAPP_PROPOSAL,
} from "@/lib/constants";
import { VIEWPORT_ONCE } from "@/lib/viewport";

const PLANS = [
  {
    id: "start",
    name: "KALI Start",
    subtitle: "Ideal para comenzar a organizar y automatizar procesos.",
    features: [
      "Automatización de redes",
      "WhatsApp",
      "Recordatorios",
      "Seguimiento",
      "Dashboard",
      "Agendamiento",
    ],
    cta: "Solicitar propuesta",
    ctaHref: WHATSAPP_PROPOSAL,
    popular: false,
    theme: {
      border: "rgba(34, 211, 238, 0.18)",
      titleColor: "#22D3EE",
      dotFrom: "#22D3EE",
      dotTo: "#0EA5E9",
      buttonBg:
        "linear-gradient(90deg, rgba(14,165,233,0.82), rgba(34,211,238,0.86))",
      buttonText: "#ffffff",
      glow: "rgba(34, 211, 238, 0.12)",
    },
  },
  {
    id: "growth",
    name: "KALI Growth",
    subtitle: "Para empresas que buscan crecer con más control.",
    includesPrevious: true,
    features: [
      "IA conversacional",
      "Integraciones",
      "Seguimiento avanzado",
      "Soporte prioritario",
    ],
    cta: "Solicitar propuesta",
    ctaHref: WHATSAPP_PROPOSAL,
    popular: true,
    badge: "Más solicitado",
    theme: {
      border: "rgba(124, 92, 255, 0.32)",
      titleColor: "#A78BFA",
      dotFrom: "#7C5CFF",
      dotTo: "#D946EF",
      buttonBg:
        "linear-gradient(90deg, rgba(124,92,255,0.9), rgba(167,139,250,0.86))",
      buttonText: "#ffffff",
      glow: "rgba(124, 92, 255, 0.18)",
    },
  },
  {
    id: "infinity",
    name: "KALI Infinity",
    subtitle: "Soluciones completamente personalizadas.",
    includesPrevious: false,
    features: [
      "Software",
      "Apps",
      "IA personalizada",
      "Sistemas internos",
      "Integraciones avanzadas",
      "Soporte prioritario",
    ],
    cta: "Hablar con un especialista",
    ctaHref: WHATSAPP_ECOSYSTEM,
    popular: false,
    exclusive: true,
    theme: {
      border: "rgba(255, 255, 255, 0.22)",
      titleColor: "#FFFFFF",
      dotFrom: "#7C5CFF",
      dotTo: "#22D3EE",
      buttonBg:
        "linear-gradient(90deg, rgba(124,92,255,0.82), rgba(34,211,238,0.72))",
      buttonText: "#ffffff",
      glow: "rgba(124, 92, 255, 0.14)",
    },
  },
];

const fadeUp = (reduceMotion, delay = 0) =>
  reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEWPORT_ONCE,
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      };

function PlanCard({ plan, index, reduceMotion }) {
  return (
    <m.div
      {...fadeUp(reduceMotion, index * 0.1)}
      className={`premium-card-group relative h-full ${
        plan.popular ? "lg:-mt-2 lg:mb-2" : ""
      }`}
    >
      <div
        className={`group relative h-full rounded-3xl border bg-white/[0.025] overflow-hidden premium-card-shell transition-colors duration-300 ${
          plan.exclusive ? "ring-1 ring-white/10" : ""
        }`}
        style={{
          borderColor: plan.theme.border,
          boxShadow: plan.popular
            ? "0 1px 0 rgba(255,255,255,0.06) inset, 0 28px 64px -36px rgba(124,92,255,0.35), 0 20px 56px -44px rgba(0,0,0,0.9)"
            : plan.exclusive
              ? "0 1px 0 rgba(255,255,255,0.08) inset, 0 32px 72px -40px rgba(124,92,255,0.25), 0 20px 56px -44px rgba(0,0,0,0.9)"
              : "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 56px -44px rgba(0,0,0,0.9)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${plan.theme.glow}, transparent 58%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {plan.exclusive && (
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-kali-accent/0 via-kali-accent/70 to-kali-cyan/70" />
        )}

        {plan.badge && (
          <div className="absolute top-6 right-6 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-kali-accent/15 border border-kali-accent/25 text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
              <Sparkle size={12} weight="fill" className="text-kali-accent" />
              {plan.badge}
            </div>
          </div>
        )}

        <div className="relative p-8 md:p-9 flex flex-col h-full">
          <h3
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ color: plan.theme.titleColor }}
          >
            {plan.name}
          </h3>
          <p className="mt-2 text-sm text-white/55 leading-relaxed">
            {plan.subtitle}
          </p>

          <div className="my-7 h-px bg-white/10" />

          {plan.includesPrevious && (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45 mb-4">
              Todo lo anterior, más:
            </p>
          )}

          <ul className="space-y-3 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${plan.theme.dotFrom}, ${plan.theme.dotTo})`,
                  }}
                >
                  <Check size={12} weight="bold" className="text-white" />
                </span>
                <span className="text-sm text-white/75 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={plan.ctaHref || WHATSAPP_PROPOSAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-tight overflow-hidden transition-colors duration-200"
              style={{
                background: plan.theme.buttonBg,
                color: plan.theme.buttonText,
              }}
            >
              <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
              <span className="relative">{plan.cta}</span>
              <ArrowRight size={16} weight="regular" className="relative transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default function Pricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="precios"
      className="relative section-pad px-5 sm:px-6 overflow-hidden perf-defer-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.05),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <m.div
          {...fadeUp(reduceMotion)}
          className="text-center mb-12 md:mb-14 max-w-2xl mx-auto px-1"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-3 sm:mb-4">
            Paquetes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-gradient-accent">
            Elige tu punto de partida
          </h2>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <m.p
          {...fadeUp(reduceMotion, 0.15)}
          className="mt-12 md:mt-14 text-center text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl mx-auto"
        >
          Cada empresa es diferente. Diseñamos soluciones adaptadas a tus
          necesidades.
        </m.p>
      </div>
    </section>
  );
}
