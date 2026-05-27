"use client";

import {
  ArrowRight,
  Bot,
  Building2,
  Calendar,
  Check,
  Filter,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Plug,
  Route,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const CONTACT_LINK = WHATSAPP_URL || "/#contacto";

const FLEXIBILITY_ITEMS = [
  { label: "Sitios web", icon: Globe },
  { label: "IA conversacional", icon: Bot },
  { label: "Automatizaciones", icon: Zap },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Agendamiento", icon: Calendar },
  { label: "Seguimiento", icon: Route },
  { label: "Dashboards", icon: LayoutDashboard },
  { label: "Integraciones", icon: Plug },
  { label: "Embudos", icon: Filter },
  { label: "Multi sucursal", icon: Building2 },
];

const PLANS = [
  {
    id: "start",
    name: "KALI Start",
    subtitle: "La forma más simple de comenzar a automatizar tu negocio.",
    price: "$2,000",
    priceNote: "MXN / mes",
    install: "$4,500 MXN",
    installBadge: "Instalación GRATIS por tiempo limitado",
    features: [
      "Automatización de Facebook e Instagram",
      "Conexión estratégica hacia WhatsApp",
      "Respuestas automáticas inteligentes",
      "IA básica de intención (sin conversaciones complejas)",
      "Seguimiento automático de clientes",
      "Recordatorios automáticos",
      "Calendario para agendar citas",
      "Dashboard organizado para seguimiento",
      "Organización de prospectos y contactos",
      "Base lista para seguir creciendo",
    ],
    scalable: {
      title: "Escalable",
      text: "Puedes comenzar con este plan y agregar nuevas funciones conforme tu negocio crezca.",
    },
    highlight: null,
    premiumNote: null,
    cta: "Comenzar ahora",
    badge: null,
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
    subtitle: "Automatización más inteligente para negocios que quieren crecer.",
    price: "$3,500",
    priceNote: "MXN / mes",
    install: "$8,000 MXN",
    installBadge: null,
    includesPrevious: true,
    features: [
      "IA conversacional avanzada",
      "Automatizaciones más personalizadas",
      "Flujos inteligentes de seguimiento",
      "Atención automática más natural",
      "Integraciones avanzadas",
      "Soporte prioritario",
      "Acompañamiento personalizado",
      "Optimización continua de procesos",
      "Mejor experiencia para clientes potenciales",
    ],
    scalable: null,
    highlight: "Ideal para negocios con alto volumen de mensajes.",
    premiumNote: null,
    cta: "Escalar mi negocio",
    badge: "Más popular",
    popular: true,
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
    subtitle: "Un ecosistema completo conectado para tu negocio.",
    price: "Desde $5,000",
    priceNote: "hasta $8,000 MXN / mes",
    install: "Desde $15,000",
    installNote: "hasta $30,000 MXN",
    installBadge: null,
    includesPrevious: true,
    features: [
      "Página web personalizada",
      "IA personalizada para el negocio",
      "Integraciones especiales",
      "Sistemas conectados entre áreas",
      "Automatizaciones avanzadas",
      "Soporte prioritario 24/7",
      "Estrategia personalizada",
      "Escalabilidad completa",
      "Infraestructura preparada para crecer",
    ],
    scalable: null,
    highlight: null,
    premiumNote:
      "Diseñado para negocios que quieren operar de manera moderna, organizada y escalable.",
    cta: "Crear mi ecosistema",
    badge: null,
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
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      };

function PlanCard({ plan, index, reduceMotion }) {
  return (
    <motion.div
      {...fadeUp(reduceMotion, index * 0.1)}
      className={`premium-card-group relative h-full ${
        plan.popular ? "lg:-mt-2 lg:mb-2" : ""
      }`}
    >
      <div
        className={`group relative h-full rounded-3xl border bg-white/[0.025] overflow-hidden premium-card-shell transition-colors duration-300 ${
          plan.exclusive
            ? "ring-1 ring-white/10"
            : ""
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
          <p className="mt-2 text-sm text-white/55 leading-relaxed">
            {plan.subtitle}
          </p>

          <div className="mt-6">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                {plan.price}
              </span>
              <span className="text-sm text-white/45">{plan.priceNote}</span>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <p className="text-xs text-white/40 uppercase tracking-[0.18em]">
                Instalación
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-sm ${
                    plan.installBadge
                      ? "text-white/40 line-through decoration-white/25"
                      : "text-white/70"
                  }`}
                >
                  {plan.install}
                </span>
                {plan.installNote && (
                  <span className="text-sm text-white/50">
                    {plan.installNote}
                  </span>
                )}
              </div>
              {plan.installBadge && (
                <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] bg-emerald-500/15 text-emerald-300 border border-emerald-400/25">
                  <TrendingUp className="w-3 h-3" />
                  {plan.installBadge}
                </span>
              )}
            </div>
          </div>

          <div className="my-7 h-px bg-white/10" />

          {plan.includesPrevious && (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45 mb-4">
              Todo lo anterior, más:
            </p>
          )}

          <ul className="space-y-3.5 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${plan.theme.dotFrom}, ${plan.theme.dotTo})`,
                  }}
                >
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm text-white/75 leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {plan.scalable && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-kali-accent/80 font-semibold mb-1.5">
                {plan.scalable.title}
              </p>
              <p className="text-xs text-white/55 leading-relaxed">
                {plan.scalable.text}
              </p>
            </div>
          )}

          {plan.highlight && (
            <div
              className="mt-6 rounded-2xl px-4 py-3 border text-xs leading-relaxed text-white/70"
              style={{
                borderColor: plan.theme.border,
                background: `linear-gradient(135deg, ${plan.theme.glow}, transparent)`,
              }}
            >
              {plan.highlight}
            </div>
          )}

          {plan.premiumNote && (
            <p className="mt-6 text-sm text-white/60 leading-relaxed italic border-l-2 border-kali-accent/50 pl-4">
              {plan.premiumNote}
            </p>
          )}

          <div className="mt-8">
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
              <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const reduceMotion = useReducedMotion();

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.05),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          {...fadeUp(reduceMotion)}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Planes
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-gradient-accent">
            Soluciones claras que crecen con tu negocio
          </h2>
          <p className="mt-5 text-white/50 text-base md:text-lg leading-relaxed">
            Sin tecnicismos: elige el punto de partida y escala cuando lo
            necesites. Cada plan está pensado para ordenar, automatizar y
            vender mejor.
          </p>
        </motion.div>

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

        <motion.div
          {...fadeUp(reduceMotion, 0.15)}
          className="mt-20 md:mt-24"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden glass-strong">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kali-accent/40 to-transparent" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[240px] bg-kali-accent/10 blur-[100px] pointer-events-none" />

            <div className="relative px-6 py-10 md:px-12 md:py-14 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient">
                No trabajamos con soluciones rígidas
              </h3>
              <p className="mt-4 text-white/55 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Cada negocio funciona diferente. Estos paquetes son una base
                inicial, pero todo puede personalizarse y escalarse dependiendo
                de las necesidades de tu empresa.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-2.5 md:gap-3">
                {FLEXIBILITY_ITEMS.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs text-white/65 border border-white/10 bg-white/[0.03] hover:border-kali-accent/35 hover:text-white/85 hover:bg-white/[0.05] transition-colors duration-300"
                  >
                    <item.icon className="w-3.5 h-3.5 text-kali-accent/80" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
