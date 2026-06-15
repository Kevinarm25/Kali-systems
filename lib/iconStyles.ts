import type { IconProps } from "@phosphor-icons/react";

/** Peso estándar Phosphor — estilo Linear / Stripe */
export const ICON_WEIGHT: IconProps["weight"] = "regular";

export const ICON_SIZE = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24,
} as const;

export type IconSizeKey = keyof typeof ICON_SIZE;

export const processIconClass = "text-white/90";

export const processIconClassSm = "text-white/90";

export const ecosystemIconClass = "text-kali-cyan";

export const attentionShellClass =
  "flex items-center justify-center w-8 h-8 shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.03] transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_20px_-8px_rgba(124,92,255,0.35)] group-hover:scale-[1.02]";
