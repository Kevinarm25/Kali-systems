"use client";
import { motion } from "framer-motion";
import { Clock, Workflow, Plug, Repeat, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Respuestas con IA 24/7",
    desc: "Tu negocio no duerme. Los agentes de IA responden al instante en cada canal, de día y de noche.",
    span: "lg:col-span-2",
  },
  {
    icon: Workflow,
    title: "Flujos de trabajo inteligentes",
    desc: "Automatización basada en lógica que se adapta en tiempo real a cada recorrido del cliente.",
  },
  {
    icon: Plug,
    title: "Integraciones CRM",
    desc: "Conecta HubSpot, Pipedrive, Notion, Sheets y más de 200 herramientas desde el día uno.",
  },
  {
    icon: Repeat,
    title: "Seguimientos automatizados",
    desc: "Reactiva leads en el momento ideal con secuencias que se sienten humanas.",
  },
  {
    icon: BarChart3,
    title: "Sistemas de crecimiento",
    desc: "Dashboards, atribución y métricas que muestran qué impulsa tus ingresos.",
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Funcionalidades
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Construido como infraestructura.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Fiable, integrado y listo para escalar con tu negocio — desde el primer día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative ${f.span || ""}`}
            >
              <div className="relative h-full min-h-[220px] glass rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-white/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_70%)]" />
                <div className="relative flex flex-col h-full">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <f.icon className="w-5 h-5 text-white/80 group-hover:text-kali-cyan transition" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-3">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
