"use client";
import { Clock, Workflow, Plug, Repeat, BarChart3 } from "lucide-react";
import PremiumSection from "@/components/ui/PremiumSection";

const features = [
  {
    icon: Clock,
    title: "Respuestas 24/7",
    desc: "La IA atiende cuando tú no puedes: mismo canal, mismo estándar, sin dejar a nadie colgado.",
    span: "lg:col-span-2",
  },
  {
    icon: Workflow,
    title: "Reglas que piensan por ti",
    desc: "La IA entiende el contexto y actúa cuando tiene sentido — menos pasos manuales, más tiempo libre.",
  },
  {
    icon: Plug,
    title: "Con lo que ya usas",
    desc: "Encaja con las herramientas que ya conoces para que nada importante quede fuera.",
  },
  {
    icon: Repeat,
    title: "Seguimiento con calidez",
    desc: "Vuelves a escribir en el momento adecuado, con tono natural — como si lo hubieras hecho tú.",
  },
  {
    icon: BarChart3,
    title: "Todo claro en un vistazo",
    desc: "Ves qué conversaciones funcionan y dónde mejorar, sin perderte en tablas interminables.",
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <PremiumSection id="features" className="py-32 px-6" glow="cyan">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Esencia
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Tecnología que se nota en el día a día.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Menos tareas repetidas. Más claridad y tiempo para lo que solo tú puedes hacer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className={`premium-card-group relative ${f.span || ""}`}>
              <div className="relative h-full min-h-[220px] premium-card-shell glass rounded-2xl p-8 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.16),transparent_68%)]" />
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
            </div>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
