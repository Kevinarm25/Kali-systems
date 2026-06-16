"use client";

import { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed z-40 group kali-float-enter gpu-layer touch-target bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] md:bottom-7 md:right-7"
      style={{ animationDelay: "0.8s" }}
    >
      <span
        className="absolute inset-0 rounded-full bg-emerald-400/30 blur-lg opacity-40 md:opacity-50 md:group-hover:opacity-90 transition-opacity duration-300"
        aria-hidden
      />
      <span
        className="absolute inset-0 hidden rounded-full bg-emerald-500/20 kali-wa-pulse md:block"
        aria-hidden
      />

      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-emerald-400/40 bg-gradient-to-br from-emerald-500/40 via-emerald-600/30 to-emerald-900/45 glass-mobile-solid md:backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(16,185,129,0.55)] transition-all duration-300 active:scale-95 md:group-hover:scale-105 md:group-hover:border-emerald-300/50">
        <FaWhatsapp
          className="relative z-[1] w-7 h-7 md:w-8 md:h-8 text-emerald-50"
          aria-hidden
        />
      </span>

      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap glass px-3 py-2 rounded-full text-xs text-white/80 pointer-events-none">
        Habla con nosotros
      </span>
    </a>
  );
}

export default memo(WhatsAppFloat);
