"use client";
import { motion } from "framer-motion";
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
      glow: "rgba(34, 211, 238, 0.35)",
      border: "rgba(34, 211, 238, 0.25)",
      titleColor: "#22D3EE",
      dotFrom: "#22D3EE",
      dotTo: "#0EA5E9",
      buttonBg:
        "linear-gradient(90deg, rgba(14,165,233,0.95), rgba(34,211,238,0.95))",
      buttonShadow: "0 0 40px -5px rgba(34,211,238,0.55)",
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
      glow: "rgba(124, 92, 255, 0.45)",
      border: "rgba(124, 92, 255, 0.4)",
      titleColor: "#A78BFA",
      dotFrom: "#7C5CFF",
      dotTo: "#D946EF",
      buttonBg:
        "linear-gradient(90deg, #7C5CFF, #D946EF)",
      buttonShadow: "0 0 50px -5px rgba(124,92,255,0.7)",
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
      glow: "rgba(234, 215, 160, 0.35)",
      border: "rgba(234, 215, 160, 0.3)",
      titleColor: "#FDE68A",
      dotFrom: "#FDE68A",
      dotTo: "#FACC15",
      buttonBg:
        "linear-gradient(90deg, #FDE68A, #FACC15)",
      buttonShadow: "0 0 45px -5px rgba(253,230,138,0.7)",
      buttonText: "#05060A",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Pricing() {
  return (
    <section
      id="precios"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Grid sutil de fondo (sin clases globales) */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
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

      {/* Glow ambiental */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(124,92,255,0.10), rgba(217,70,239,0.05), rgba(34,211,238,0.10))",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header — solo "Planes" + título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: "rgba(124,92,255,0.85)" }}
          >
            Planes
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            El plan que encaja con tu ritmo
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {PLANS.map((plan, i) => {
            const isFeatured = plan.id === "master";
            return (
              <motion.div
                key={plan.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariants}
                className={`relative group ${
                  isFeatured ? "lg:-translate-y-3" : ""
                }`}
              >
                {/* Glow exterior */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${plan.theme.glow}, transparent 70%)`,
                  }}
                />

                {/* Card */}
                <div
                  className="relative h-full rounded-3xl backdrop-blur-xl border overflow-hidden transition-all duration-500"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.025)",
                    borderColor: plan.theme.border,
                  }}
                >
                  {/* Línea superior luminosa */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${plan.theme.glow}, transparent)`,
                    }}
                  />

                  {/* Glow interior */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-50"
                    style={{
                      background: `radial-gradient(circle at 50% -10%, ${plan.theme.glow}, transparent 60%)`,
                    }}
                  />

                  {/* Badge "Más elegido" */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="absolute top-5 right-5 z-10"
                    >
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-white"
                        style={{
                          background:
                            "linear-gradient(90deg, #7C5CFF, #D946EF)",
                          boxShadow: "0 0 25px -3px rgba(124,92,255,0.7)",
                        }}
                      >
                        <Sparkles className="w-3 h-3" />
                        {plan.badge}
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={contentVariants}
                    className="relative p-8 md:p-9 flex flex-col h-full"
                  >
                    {/* 1. Nombre del plan */}
                    <motion.h3
                      variants={itemVariants}
                      className="text-2xl font-semibold tracking-[-0.02em]"
                      style={{ color: plan.theme.titleColor }}
                    >
                      {plan.name}
                    </motion.h3>

                    {/* 2. Subtítulo */}
                    <motion.p
                      variants={itemVariants}
                      className="mt-2 text-sm text-white/55"
                    >
                      {plan.subtitle}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                      variants={itemVariants}
                      className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />

                    {/* 3. Lista */}
                    <ul className="space-y-3.5 flex-1">
                      {plan.features.map((feature) => (
                        <motion.li
                          key={feature}
                          variants={itemVariants}
                          className="flex items-start gap-3"
                        >
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
                        </motion.li>
                      ))}
                    </ul>

                    {/* 4. Botón */}
                    <motion.div variants={itemVariants} className="mt-9">
                      <a
                        href={CONTACT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-tight overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                        style={{
                          background: plan.theme.buttonBg,
                          color: plan.theme.buttonText,
                          boxShadow: "0 0 0 transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow =
                            plan.theme.buttonShadow;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 0 0 transparent";
                        }}
                      >
                        <span className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
                        <span className="relative">{plan.cta}</span>
                        <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
