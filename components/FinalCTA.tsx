"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[32px] overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#7C5CFF,#22D3EE,#EC4899,#7C5CFF)] bg-[length:300%_300%] animate-gradient-x opacity-90" />
          <div className="absolute inset-0 bg-kali-black/55" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-kali-accent/30 blur-3xl" />

          <div className="relative px-8 sm:px-12 lg:px-20 py-20 lg:py-28 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] text-white"
            >
              Deja de perseguir leads. <br />
              <span className="text-white/70">Empieza a cerrarlos.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 text-white/60 text-lg max-w-2xl mx-auto"
            >
              Despliega tu motor comercial con IA en días, no meses. Habla con nuestro equipo y ve
              tu primera automatización en vivo esta semana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-medium text-sm hover:scale-[1.03] transition-transform duration-300"
              >
                Empezar en WhatsApp
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 glass-strong text-white px-7 py-4 rounded-full font-medium text-sm hover:bg-white/15 transition"
              >
                Ver sistemas
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
