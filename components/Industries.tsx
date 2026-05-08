"use client";
import { motion } from "framer-motion";
import { Stethoscope, Scale, Home, Store, UtensilsCrossed } from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Médicos", tag: "Clínicas y consultorios" },
  { icon: Scale, name: "Notarios", tag: "Despachos legales" },
  { icon: Home, name: "Inmobiliaria", tag: "Agentes y brokers" },
  { icon: Store, name: "Negocios locales", tag: "PyMEs y servicios" },
  { icon: UtensilsCrossed, name: "Restaurantes", tag: "Alimentación y hospitalidad" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Industrias
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Diseñado para quien eres.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Flujos de automatización a medida para los negocios que mueven economías reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative h-[220px] glass rounded-2xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/20">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-kali-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ind.icon className="w-5 h-5 text-white/80 group-hover:text-kali-cyan transition" />
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold tracking-tight">{ind.name}</h3>
                  <p className="text-xs text-white/40 mt-1">{ind.tag}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kali-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
