"use client";
import {
  MessageCircle,
  Database,
  Bot,
  Magnet,
  CalendarClock,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import PremiumSection from "@/components/ui/PremiumSection";

const services = [
  {
    icon: MessageCircle,
    title: "Automatización en WhatsApp",
    desc: "La IA responde al momento, con tu tono y con contexto. Menos esperas, más conversaciones que avanzan.",
  },
  {
    icon: FaInstagram,
    title: "Automatización en Instagram",
    desc: "Mensajes directos, comentarios e historias con respuesta automática. Tu marca presente sin estar pegado al celular.",
  },
  {
    icon: Database,
    title: "Clientes organizados",
    desc: "Cada conversación en su lugar: quién escribió, qué pidió y qué sigue. Nada se pierde entre chats.",
  },
  {
    icon: Bot,
    title: "Seguimiento inteligente",
    desc: "La IA recuerda por ti: mensajes en el momento justo, sin copiar y pegar ni perseguir a nadie.",
  },
  {
    icon: Magnet,
    title: "Más contactos, menos trabajo",
    desc: "Formularios y puntos de contacto que alimentan tu sistema automáticamente — sin pasar datos a mano.",
  },
  {
    icon: CalendarClock,
    title: "Agenda automática",
    desc: "Citas que se confirman, recuerdan y reprograman solas. Menos olvidos, menos idas y venidas por mensaje.",
  },
];

export default function Services() {
  return (
    <PremiumSection id="services" className="py-32 px-6" glow="purple">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Servicios
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Lo que tu cliente espera — sin el caos de antes.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Respuestas rápidas, conversaciones ordenadas y un sistema que trabaja contigo, no en tu contra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="premium-card-group relative">
              <div className="relative h-full premium-card-shell glass rounded-2xl p-7 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.22),transparent_58%)]" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="w-5 h-5 text-white/80 group-hover:text-kali-accent transition" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-kali-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
