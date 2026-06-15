"use client";

import { useMemo } from "react";
import { m, useReducedMotion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwise,
  Browser,
  ChartLineUp,
  DeviceMobile,
  Megaphone,
  Robot,
  SquaresFour,
  Target,
} from "@phosphor-icons/react";
import { FaWhatsapp } from "react-icons/fa";
import { VIEWPORT_ONCE } from "@/lib/viewport";
import { ENTER } from "@/lib/motion";
import { ICON_SIZE, ecosystemIconClass } from "@/lib/iconStyles";
import KaliIcon from "@/components/ui/KaliIcon";

type OrbitNode = {
  icon: Icon;
  label: string;
  angle: number;
  brand?: boolean;
};

const NODES: OrbitNode[] = [
  { icon: Browser, label: "Sitios Web", angle: 0 },
  { icon: Browser, label: "WhatsApp", angle: 40, brand: true },
  { icon: Robot, label: "Inteligencia Artificial", angle: 80 },
  { icon: ChartLineUp, label: "Dashboards", angle: 120 },
  { icon: SquaresFour, label: "Software", angle: 160 },
  { icon: DeviceMobile, label: "Apps", angle: 200 },
  { icon: ArrowsClockwise, label: "Automatización", angle: 240 },
  { icon: Megaphone, label: "Marketing", angle: 280 },
  { icon: Target, label: "Seguimiento", angle: 320 },
];

const PULSE_INDICES = [0, 3, 6];

const CX = 300;
const CY = 300;
const RADIUS = 210;

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

export default function EcosystemConnected() {
  const reduceMotion = useReducedMotion();

  const positions = useMemo(
    () => NODES.map((n) => ({ ...n, pos: polar(n.angle, RADIUS) })),
    []
  );

  return (
    <section
      id="ecosistema"
      className="relative section-pad px-5 sm:px-6 overflow-hidden bg-[#030408] perf-defer-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(124,92,255,0.12),transparent_70%)]" />
        <div className="absolute inset-0 opacity-30 grid-bg" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={ENTER}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-kali-cyan/80 mb-4">
            Ecosistema KALI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gradient-accent">
            Todo conectado. Todo trabajando por ti.
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ ...ENTER, delay: reduceMotion ? 0 : 0.06 }}
          className="relative mx-auto w-full max-w-[min(640px,100%)] aspect-square gpu-layer"
        >
          <svg viewBox="0 0 600 600" className="w-full h-full" aria-hidden>
            <defs>
              <linearGradient id="orbit-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#7c5cff" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.25" />
              </linearGradient>
              <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle
              cx={CX}
              cy={CY}
              r={RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <circle
              cx={CX}
              cy={CY}
              r={RADIUS * 0.55}
              fill="none"
              stroke="rgba(124,92,255,0.12)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {!reduceMotion && (
              <g className="kali-orbit-spin">
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke="url(#orbit-line)"
                  strokeWidth="1"
                  strokeDasharray="8 16"
                />
              </g>
            )}

            <circle cx={CX} cy={CY} r={90} fill="url(#core-glow)" />

            {positions.map((node) => (
              <line
                key={node.label}
                x1={CX}
                y1={CY}
                x2={node.pos.x}
                y2={node.pos.y}
                stroke="url(#orbit-line)"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.7"
              />
            ))}

            {!reduceMotion &&
              PULSE_INDICES.map((index) => {
                const node = positions[index];
                return (
                  <circle key={`pulse-${node.label}`} r="3" fill="#22d3ee" className="hidden md:block">
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="2.8s"
                      repeatCount="indefinite"
                      begin={`${index * 0.35}s`}
                    />
                    <animateMotion
                      dur="2.8s"
                      repeatCount="indefinite"
                      begin={`${index * 0.35}s`}
                      path={`M ${CX},${CY} L ${node.pos.x},${node.pos.y}`}
                    />
                  </circle>
                );
              })}
          </svg>

          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl glass-strong border border-kali-accent/40 flex flex-col items-center justify-center shadow-[0_0_80px_-10px_rgba(124,92,255,0.55)]">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  KALI
                </span>
              </div>
            </div>

            {positions.map((node) => {
              const left = (node.pos.x / 600) * 100;
              const top = (node.pos.y / 600) * 100;
              return (
                <div
                  key={node.label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 max-w-[88px] sm:max-w-[110px]">
                    <div className="group/eco w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass border border-white/10 flex items-center justify-center shadow-[0_8px_32px_-8px_rgba(34,211,238,0.35)] hover:border-kali-cyan/40 transition-all duration-300">
                      {node.brand ? (
                        <FaWhatsapp
                          className="text-emerald-400 transition-transform duration-300 group-hover/eco:scale-105"
                          style={{ width: ICON_SIZE.sm, height: ICON_SIZE.sm }}
                          aria-hidden
                        />
                      ) : (
                        <KaliIcon
                          icon={node.icon}
                          size="sm"
                          className={`${ecosystemIconClass} group-hover/eco:text-kali-cyan transition-transform duration-300 group-hover/eco:scale-105`}
                        />
                      )}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-white/65 font-medium text-center leading-tight">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
