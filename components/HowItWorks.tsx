"use client";
import { motion } from "framer-motion";
import { Inbox, Brain, CheckCircle2, MessageSquare, TrendingUp } from "lucide-react";
import PremiumSection from "@/components/ui/PremiumSection";

const steps = [
  { icon: Inbox, label: "Contacto", desc: "Llega por cualquier canal" },
  { icon: Brain, label: "Respuesta IA", desc: "La IA contesta al momento, con sentido" },
  { icon: CheckCircle2, label: "Prioridad", desc: "Ves quién necesita atención ya" },
  { icon: MessageSquare, label: "Seguimiento", desc: "Sin esfuerzo, sin mensajes repetidos" },
  { icon: TrendingUp, label: "Siguiente paso", desc: "Todo listo para cerrar con claridad" },
];

export default function HowItWorks() {
  return (
    <PremiumSection id="how" className="relative py-32 px-6 overflow-hidden" glow="dual">
      <div className="absolute inset-0 grid-bg opacity-30 section-fade pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Cómo funciona
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Del primer “hola” al “listo”.
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-2xl mx-auto">
            Cinco pasos claros. Una experiencia fluida para ti y para quien te escribe.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-kali-accent/40 to-transparent" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-px bg-gradient-to-r from-kali-accent/0 via-kali-accent to-kali-cyan origin-left"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="premium-card-group group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-kali-accent to-kali-cyan opacity-30 blur-xl group-hover:opacity-[0.55] transition-opacity duration-500" />
                  <div className="relative w-[84px] h-[84px] rounded-2xl premium-card-shell glass-strong flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <step.icon className="w-7 h-7 text-white relative z-[1]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-kali-black border border-white/15 flex items-center justify-center text-[10px] text-white/60 font-medium z-[2]">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="font-semibold tracking-tight mb-1">{step.label}</h3>
                <p className="text-xs text-white/45 leading-relaxed max-w-[140px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PremiumSection>
  );
}
