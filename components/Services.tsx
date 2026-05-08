"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Database,
  Bot,
  Magnet,
  CalendarClock,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
const services = [
  {
    icon: MessageCircle,
    title: "Automatización en WhatsApp",
    desc: "Agentes de IA conversacionales que responden al instante, califican y convierten leads por WhatsApp Business.",
  },
  {
    icon: FaInstagram,
    title: "Automatización en Instagram",
    desc: "Respuestas automáticas en mensajes directos, comentarios e historias. Convierte tu presencia social en un motor de conversión.",
  },
  {
    icon: Database,
    title: "Sistemas CRM",
    desc: "CRMs a medida que sincronizan cada conversación, etiqueta, estado del lead y momento de ingreso en tiempo real.",
  },
  {
    icon: Bot,
    title: "Seguimiento con IA",
    desc: "Secuencias inteligentes que dan seguimiento multicanal con el mensaje correcto en el momento preciso.",
  },
  {
    icon: Magnet,
    title: "Captación de leads",
    desc: "Embudos y formularios de alta conversión conectados directo a tus flujos de IA y pipelines.",
  },
  {
    icon: CalendarClock,
    title: "Automatización de citas",
    desc: "Reservas de punta a punta: confirmar, recordar, reprogramar. Cero inasistencias. Cero trabajo manual.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Servicios
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Un ecosistema integral de automatización.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Todo lo que necesitas para captar, calificar y cerrar — ingenierizado en una
            infraestructura fluida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.15),transparent_60%)]" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="w-5 h-5 text-white/80 group-hover:text-kali-accent transition" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-kali-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
