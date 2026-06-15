import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  EMAIL,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  WHATSAPP_DIAGNOSTIC,
  WHATSAPP_URL,
} from "@/lib/constants";
import PaymentMethods from "@/components/PaymentMethods";
import ContactIconButton from "@/components/ui/ContactIconButton";
import AttentionIcon, {
  type AttentionIconType,
} from "@/components/ui/AttentionIcon";

const EXPLORE_LINKS = [
  { href: "/#problemas", label: "Soluciones" },
  { href: "/#ecosistema", label: "Ecosistema" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#escalabilidad", label: "Escalabilidad" },
  { href: "/#precios", label: "Paquetes" },
];

const ATTENTION_ITEMS: {
  icon: AttentionIconType;
  label: string;
  href: string;
  external: boolean;
}[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp directo",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: "email",
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: "calendar",
    label: "Agendar una llamada",
    href: "/contacto",
    external: false,
  },
  {
    icon: "support",
    label: "Soporte personalizado",
    href: WHATSAPP_DIAGNOSTIC,
    external: true,
  },
];

const SCHEDULE = [
  { days: "Lunes a viernes", hours: "09:00 – 20:00" },
  { days: "Sábados", hours: "09:00 – 15:00" },
  { days: "Domingos", closed: true as const },
];

const SOCIAL_LINKS = [
  { variant: "instagram" as const, href: INSTAGRAM_LINK, label: "Instagram" },
  { variant: "facebook" as const, href: FACEBOOK_LINK, label: "Facebook" },
  { variant: "whatsapp" as const, href: WHATSAPP_URL, label: "WhatsApp" },
  {
    variant: "email" as const,
    href: `mailto:${EMAIL}`,
    label: "Correo electrónico",
  },
];

function FooterColumnTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-sm font-semibold tracking-tight text-white mb-4 sm:mb-5">
      {children}
    </h4>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "group text-sm text-white/55 hover:text-white transition-colors duration-300";

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(124,92,255,0.08),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kali-accent/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12">
          {/* Columna 1 — Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_8px_32px_-12px_rgba(124,92,255,0.25)]">
                <Image
                  src="/logo-icon.png"
                  alt="KALI Systems"
                  width={40}
                  height={40}
                  sizes="40px"
                  loading="lazy"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block text-sm font-bold tracking-[0.14em] text-white">
                  KALI
                </span>
                <span className="block text-[9px] font-medium tracking-[0.28em] text-white/40 mt-1">
                  SYSTEMS
                </span>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Soluciones digitales para empresas que quieren crecer con
              tecnología.
            </p>

            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <ContactIconButton
                  key={link.label}
                  variant={link.variant}
                  href={link.href}
                  label={link.label}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Columna 2 — Explorar */}
          <div>
            <FooterColumnTitle>Explorar</FooterColumnTitle>
            <ul className="space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Atención */}
          <div>
            <FooterColumnTitle>Atención</FooterColumnTitle>
            <ul className="space-y-3.5">
              {ATTENTION_ITEMS.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href} external={item.external}>
                    <span className="inline-flex items-center gap-3">
                      <AttentionIcon type={item.icon} />
                      <span>{item.label}</span>
                    </span>
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Horarios */}
          <div>
            <FooterColumnTitle>Horarios</FooterColumnTitle>
            <ul className="space-y-0">
              {SCHEDULE.map((row, i) => (
                <li
                  key={row.days}
                  className={`flex items-center justify-between gap-3 py-2.5 ${
                    i < SCHEDULE.length - 1 ? "border-b border-white/[0.06]" : ""
                  }`}
                >
                  <span className="text-sm text-white/55">{row.days}</span>
                  {"closed" in row && row.closed ? (
                    <span className="text-[10px] uppercase tracking-[0.14em] font-semibold px-2 py-0.5 rounded-md border border-kali-accent/30 bg-kali-accent/10 text-kali-accent/90">
                      Cerrado
                    </span>
                  ) : (
                    <span className="text-sm text-white/75 tabular-nums">
                      {row.hours}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PaymentMethods />

        <div className="pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} KALI Systems. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link
              href="/privacidad"
              className="text-xs text-white/45 hover:text-white/80 transition-colors duration-300"
            >
              Aviso de privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-xs text-white/45 hover:text-white/80 transition-colors duration-300"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
