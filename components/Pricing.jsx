"use client";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const CONTACT_LINK = WHATSAPP_URL || "#contacto";

const PLANS = [
  {
    id: "start",
    name: "KALI START",
    subtitle: "Lo esencial para empezar tranquilo",
    cta: "Comenzar",
    badge: null,
    features: [
      "Respuestas automáticas",
      "Agenda automática",
      "Confirmaciones de citas",
      "Formularios inteligentes",
      "Seguimiento simple y ordenado",
      "WhatsApp + Instagram + Facebook",
      "Nuevos contactos sin pasarlos a mano",
      "Recordatorios automáticos",
    ],
    theme: {
      border: "rgba(34, 211, 238, 0.18)",
      titleColor: "#22D3EE",
      dotFrom: "#22D3EE",
      dotTo: "#0EA5E9",
      buttonBg:
        "linear-gradient(90deg, rgba(14,165,233,0.82), rgba(34,211,238,0.86))",
      buttonText: "#ffffff",
    },
  },
  {
    id: "master",
    name: "KALI MASTER",
    subtitle: "IA que habla con tus clientes por ti",
    cta: "Escalar",
    badge: "Más elegido",
    features: [
      "Todo lo de KALI START",
      "IA respondiendo clientes",
      "Seguimiento inteligente sin perseguir",
      "Todo ordenado en una base clara",
      "Contactos clasificados automáticamente",
      "Rutas de contacto que avanzan solas",
      "Captación desde redes sociales",
      "Vista simple de quién sigue y quién no",
    ],
    theme: {
      border: "rgba(124, 92, 255, 0.32)",
      titleColor: "#A78BFA",
      dotFrom: "#7C5CFF",
      dotTo: "#D946EF",
      buttonBg:
        "linear-gradient(90deg, rgba(124,92,255,0.9), rgba(167,139,250,0.86))",
      buttonText: "#ffffff",
    },
  },
  {
    id: "enterprise",
    name: "KALI ENTERPRISE",
    subtitle: "Tu operación, cubierta de punta a punta",
    cta: "Crear sistema",
    badge: null,
    features: [
      "Todo lo de KALI MASTER",
      "Página web profesional",
      "IA avanzada personalizada",
      "Varias áreas del negocio coordinadas",
      "Ventas con menos fricción día a día",
      "Páginas de llegada integradas",
      "Conexiones a medida cuando hagan falta",
      "Soporte prioritario",
    ],
    theme: {
      border: "rgba(255, 255, 255, 0.16)",
      titleColor: "#FFFFFF",
      dotFrom: "#7C5CFF",
      dotTo: "#22D3EE",
      buttonBg:
        "linear-gradient(90deg, rgba(124,92,255,0.82), rgba(34,211,238,0.72))",
      buttonText: "#ffffff",
    },
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      className="relative py-32 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: "rgba(124,92,255,0.85)" }}
          >
            Planes
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            El plan que encaja con tu ritmo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className="relative h-full rounded-3xl border bg-white/[0.025] overflow-hidden transition-colors duration-200 hover:bg-white/[0.04]"
                style={{
                  borderColor: plan.theme.border,
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 56px -44px rgba(0,0,0,0.9)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {plan.badge && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-kali-accent/15 border border-kali-accent/25 text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
                      <Sparkles className="w-3 h-3 text-kali-accent" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="relative p-8 md:p-10 flex flex-col h-full">
                  <h3
                    className="text-2xl font-semibold tracking-[-0.02em]"
                    style={{ color: plan.theme.titleColor }}
                  >
                    {plan.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/55">
                    {plan.subtitle}
                  </p>

                  <div className="my-8 h-px bg-white/10" />

                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${plan.theme.dotFrom}, ${plan.theme.dotTo})`,
                          }}
                        >
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-sm text-white/75 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <a
                      href={CONTACT_LINK}
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
                      <ArrowRight className="relative w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
