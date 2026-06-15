"use client";

import { m, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  Browser,
  ChartBar,
  DeviceMobile,
  Robot,
} from "@phosphor-icons/react";
import PremiumSection from "@/components/ui/PremiumSection";
import SectionHeader from "@/components/ui/SectionHeader";
import KaliIcon from "@/components/ui/KaliIcon";

const SERVICES: {
  icon: Icon;
  title: string;
  description: string;
}[] = [
  {
    icon: Browser,
    title: "Sitios Web",
    description: "Diseñados para generar confianza y captar oportunidades.",
  },
  {
    icon: ArrowsClockwise,
    title: "Automatización",
    description: "Procesos que trabajan por ti.",
  },
  {
    icon: Robot,
    title: "Inteligencia Artificial",
    description: "Atención y seguimiento más eficientes.",
  },
  {
    icon: ChartBar,
    title: "Dashboards",
    description: "Información clara para tomar decisiones.",
  },
  {
    icon: DeviceMobile,
    title: "Software y Apps",
    description: "Herramientas creadas para las necesidades de tu empresa.",
  },
];

export default function GrowthModules() {
  const reduceMotion = useReducedMotion();

  return (
    <PremiumSection id="services" className="section-pad px-5 sm:px-6" glow="purple">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Cómo te ayudamos"
          title="Soluciones simples, resultados reales"
          align="center"
          className="max-w-2xl mx-auto mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {SERVICES.map((service, i) => (
            <m.div
              key={service.title}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.05 }}
              className={`premium-card-group ${
                i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="premium-card-shell glass rounded-2xl p-5 sm:p-6 h-full">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.03]">
                  <KaliIcon icon={service.icon} size="md" className="text-kali-accent/90" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
}
