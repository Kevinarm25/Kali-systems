"use client";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-kali-accent to-kali-cyan flex items-center justify-center">
            <span className="text-xs font-bold">K</span>
          </div>
          <span className="text-sm text-white/70">
            KALI Systems · © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-white/40 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/30">Ingeniería con inteligencia.</p>
      </div>
    </footer>
  );
}
