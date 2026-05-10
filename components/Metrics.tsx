"use client";
import { motion } from "framer-motion";
import { Clock, Repeat, Plug, TrendingDown } from "lucide-react";

const METRICS = [
  {
    icon: Clock,
    value: "24/7",
    label: "Atención automática",
    desc: "Respuesta al instante, a cualquier hora.",
  },
  {
    icon: Repeat,
    value: "100%",
    label: "Seguimiento cubierto",
    desc: "Nadie se queda sin respuesta.",
  },
  {
    icon: Plug,
    value: "+5",
    label: "Todo conectado",
    desc: "WhatsApp, Instagram, Facebook y tu web — en una misma línea.",
  },
  {
    icon: TrendingDown,
    value: "-80%",
    label: "Menos trabajo manual",
    desc: "Tu equipo deja de hacer lo mismo una y otra vez.",
  },
];

export default function Metrics() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Resultados
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gradient-accent">
            Señales claras de que va bien
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative glass rounded-2xl p-6 md:p-7 overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-kali-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-kali-cyan" />
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-gradient-accent mb-1.5">
                    {m.value}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">
                    {m.label}
                  </div>
                  <div className="text-xs text-white/45 leading-relaxed">
                    {m.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

