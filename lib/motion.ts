/** Curva estándar — sensación Linear / Stripe */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

/** Entrada de sección — rápida e inmediata */
export const ENTER = {
  duration: 0.4,
  ease: MOTION_EASE,
} as const;

/** Entrada de hero / elementos principales */
export const ENTER_HERO = {
  duration: 0.48,
  ease: MOTION_EASE,
} as const;

/** Micro-entradas (chips, items pequeños) */
export const ENTER_FAST = {
  duration: 0.32,
  ease: MOTION_EASE,
} as const;

/** Stagger compacto entre elementos hermanos */
export function stagger(index: number, step = 0.025): number {
  return index * step;
}

/** Fade-up reutilizable para whileInView */
export function fadeUpProps(reduceMotion: boolean | null, delay = 0) {
  if (reduceMotion) return {};
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { ...ENTER, delay },
  };
}
