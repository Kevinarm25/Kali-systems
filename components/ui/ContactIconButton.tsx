"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { At } from "@phosphor-icons/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ICON_SIZE } from "@/lib/iconStyles";
import KaliIcon from "@/components/ui/KaliIcon";

type ContactVariant = "whatsapp" | "instagram" | "facebook" | "email";

const BASE_SHELL =
  "bg-white/[0.04] border-white/[0.1] backdrop-blur-md";

const VARIANTS = {
  whatsapp: {
    shell: `${BASE_SHELL} bg-gradient-to-br from-emerald-500/15 to-emerald-900/10 border-emerald-400/25`,
    hover:
      "md:hover:border-emerald-400/45 md:hover:shadow-[0_8px_28px_-10px_rgba(16,185,129,0.45)]",
    glow: "bg-emerald-400/30",
    brand: true as const,
    iconClass: "text-emerald-400 md:group-hover:text-emerald-300",
  },
  instagram: {
    shell: `${BASE_SHELL} bg-gradient-to-br from-[#f09433]/20 via-[#dc2743]/15 to-[#bc1888]/20 border-pink-400/22`,
    hover:
      "md:hover:border-pink-400/40 md:hover:shadow-[0_8px_28px_-10px_rgba(225,48,108,0.35)]",
    glow: "bg-pink-500/25",
    brand: true as const,
    iconClass: "text-white/90 md:group-hover:text-white",
  },
  facebook: {
    shell: `${BASE_SHELL} bg-gradient-to-br from-blue-600/20 to-blue-900/15 border-blue-400/25`,
    hover:
      "md:hover:border-blue-400/45 md:hover:shadow-[0_8px_28px_-10px_rgba(59,130,246,0.4)]",
    glow: "bg-blue-500/25",
    brand: true as const,
    iconClass: "text-blue-300 md:group-hover:text-blue-200",
  },
  email: {
    shell: `${BASE_SHELL} bg-gradient-to-br from-violet-500/18 via-[#7c5cff]/12 to-cyan-500/10 border-violet-400/25`,
    hover:
      "md:hover:border-violet-300/45 md:hover:shadow-[0_8px_28px_-10px_rgba(124,92,255,0.4)]",
    glow: "bg-gradient-to-br from-violet-500/30 to-cyan-400/20",
    brand: false as const,
    iconClass: "text-violet-300 md:group-hover:text-violet-200",
  },
};

const SIZES = {
  sm: { button: "w-11 h-11", icon: ICON_SIZE.sm },
  md: { button: "w-11 h-11 sm:w-12 sm:h-12", icon: ICON_SIZE.md },
  lg: { button: "w-14 h-14 md:w-16 md:h-16", icon: ICON_SIZE.lg },
};

type ContactIconButtonProps = {
  variant: ContactVariant;
  href: string;
  label: string;
  size?: keyof typeof SIZES;
  className?: string;
};

function BrandIcon({
  variant,
  size,
  className,
}: {
  variant: "whatsapp" | "instagram" | "facebook";
  size: number;
  className: string;
}) {
  const style = { width: size, height: size };
  if (variant === "whatsapp") {
    return (
      <FaWhatsapp
        className={`relative z-[1] transition-transform duration-300 md:group-hover:scale-105 ${className}`}
        style={style}
        aria-hidden
      />
    );
  }
  if (variant === "instagram") {
    return (
      <FaInstagram
        className={`relative z-[1] transition-transform duration-300 md:group-hover:scale-105 ${className}`}
        style={style}
        aria-hidden
      />
    );
  }
  return (
    <FaFacebookF
      className={`relative z-[1] transition-transform duration-300 md:group-hover:scale-105 ${className}`}
      style={style}
      aria-hidden
    />
  );
}

export default function ContactIconButton({
  variant,
  href,
  label,
  size = "sm",
  className = "",
}: ContactIconButtonProps) {
  const [finePointer, setFinePointer] = useState(false);
  const config = VARIANTS[variant];
  const dims = SIZES[size];
  const isMailto = href.startsWith("mailto:");

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <m.a
      href={href}
      aria-label={label}
      title={label}
      {...(isMailto
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      {...(finePointer ? { whileHover: { y: -2 } } : {})}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-full border transition-all duration-300 touch-target glass-mobile-solid md:glass ${dims.button} ${config.shell} ${config.hover} ${className}`}
    >
      <span
        className={`pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 md:group-hover:opacity-100 ${config.glow}`}
        aria-hidden
      />
      {config.brand ? (
        <BrandIcon
          variant={variant as "whatsapp" | "instagram" | "facebook"}
          size={dims.icon}
          className={config.iconClass}
        />
      ) : (
        <span className="relative z-[1] flex items-center justify-center">
          <KaliIcon
            icon={At}
            size={size === "lg" ? "lg" : "sm"}
            className={config.iconClass}
          />
        </span>
      )}
    </m.a>
  );
}
