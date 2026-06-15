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
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group kali-float-enter gpu-layer"
      style={{ animationDelay: "0.8s" }}
    >
      <span
        className="absolute inset-0 rounded-full bg-emerald-400/35 blur-lg opacity-50 group-hover:opacity-90 transition-opacity duration-300"
        aria-hidden
      />
      <span
        className="absolute inset-0 hidden rounded-full bg-emerald-500/20 kali-wa-pulse md:block"
        aria-hidden
      />

      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-emerald-400/35 bg-gradient-to-br from-emerald-500/35 via-emerald-600/25 to-emerald-900/40 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(16,185,129,0.55)] transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-300/50 group-hover:shadow-[0_16px_48px_-10px_rgba(16,185,129,0.65)]">
        <span
          className="absolute inset-0 rounded-full bg-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden
        />
        <FaWhatsapp
          className="relative z-[1] w-7 h-7 md:w-8 md:h-8 text-emerald-100 group-hover:text-white transition-colors duration-300"
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
