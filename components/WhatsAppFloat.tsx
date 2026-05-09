"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl opacity-70 group-hover:opacity-100 animate-pulse" />
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />

      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_10px_40px_-5px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform duration-300">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.2} />
      </span>

      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap glass px-3 py-2 rounded-full text-xs text-white/80">
        Habla con nosotros
      </span>
    </motion.a>
  );
}
