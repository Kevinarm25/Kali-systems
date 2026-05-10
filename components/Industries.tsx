"use client";
import { Stethoscope, Scale, Home, Store, UtensilsCrossed } from "lucide-react";
import PremiumSection from "@/components/ui/PremiumSection";

const industries = [
  { icon: Stethoscope, name: "Médicos", tag: "Clínicas y consultorios" },
  { icon: Scale, name: "Notarios", tag: "Despachos legales" },
  { icon: Home, name: "Inmobiliaria", tag: "Agentes y brokers" },
  { icon: Store, name: "Negocios locales", tag: "PyMEs y servicios" },
  { icon: UtensilsCrossed, name: "Restaurantes", tag: "Alimentación y hospitalidad" },
];

export default function Industries() {
  return (
    <PremiumSection id="industries" className="py-32 px-6" glow="dual">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Industrias
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Diseñado para quien eres.
          </h2>
          <p className="mt-5 text-white/50 text-lg">
            Ajustamos el sistema a tu ritmo: del consultorio al restaurante, siempre con la misma calma tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind) => (
            <div key={ind.name} className="premium-card-group relative group">
              <div className="relative h-[220px] premium-card-shell glass rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-kali-accent/14 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ind.icon className="w-5 h-5 text-white/80 group-hover:text-kali-cyan transition" />
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold tracking-tight">{ind.name}</h3>
                  <p className="text-xs text-white/40 mt-1">{ind.tag}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kali-accent/55 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
