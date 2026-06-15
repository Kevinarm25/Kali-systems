"use client";
import type { Icon } from "@phosphor-icons/react";
import {
  CalendarDots,
  ForkKnife,
  Sparkle,
  Stethoscope,
  Storefront,
} from "@phosphor-icons/react";
import PremiumSection from "@/components/ui/PremiumSection";
import SectionHeader from "@/components/ui/SectionHeader";
import KaliIcon from "@/components/ui/KaliIcon";

const industries: { icon: Icon; name: string; tag: string }[] = [
  { icon: Stethoscope, name: "Clínicas", tag: "Consultas y seguimiento" },
  { icon: Sparkle, name: "Belleza", tag: "Reservas y clientela fiel" },
  { icon: ForkKnife, name: "Restaurantes", tag: "Más mesas, menos caos" },
  { icon: CalendarDots, name: "Con citas", tag: "Agenda siempre llena" },
  { icon: Storefront, name: "Negocios locales", tag: "Crecimiento ordenado" },
];

export default function Industries() {
  return (
    <PremiumSection id="industries" className="section-pad px-5 sm:px-6" glow="dual">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Para tu industria"
          title="Diseñado para negocios que viven del contacto"
          description="Misma infraestructura, distinto ritmo: adaptamos la experiencia a cómo realmente operas."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <div key={ind.name} className="premium-card-group relative group">
              <div className="relative min-h-[180px] sm:h-[200px] premium-card-shell glass rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-16 -right-16 hidden w-40 h-40 rounded-full bg-kali-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block" />
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <KaliIcon
                    icon={ind.icon}
                    size="md"
                    className="text-white/80 group-hover:text-kali-cyan transition-colors duration-300"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/40 mt-1 leading-snug">
                    {ind.tag}
                  </p>
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
