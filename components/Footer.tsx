"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

const LEGAL = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/cookies", label: "Cookies" },
];

const SOCIALS = [
  {
    href: "https://www.instagram.com/kalisystems.ai/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://facebook.com/TUPAGINA",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: WHATSAPP_URL,
    icon: MessageCircle,
    label: "WhatsApp",
  },
  {
    href: "mailto:contacto@kalisystems.mx",
    icon: Mail,
    label: "Correo",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(124,92,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-icon.png"
                alt="KALI Systems"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />

              <span className="text-base font-semibold tracking-tight text-white">
                KALI Systems
              </span>
            </div>

            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              IA respondiendo clientes y ordenando tu día a día — para negocios que quieren crecer sin ahogarse en mensajes.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Legal
            </h4>

            <ul className="space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Contacto
            </h4>

            <a
              href="mailto:contacto@kalisystems.mx"
              className="text-sm text-white/65 hover:text-white transition block mb-5"
            >
              contacto@kalisystems.mx
            </a>

            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;

                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} KALI Systems. Todos los derechos
            reservados.
          </p>

          <p className="text-xs text-white/30 tracking-wide">
            Pensado con IA. Hecho para personas.
          </p>
        </div>
      </div>
    </footer>
  );
}