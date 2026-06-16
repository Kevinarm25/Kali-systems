"use client";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/constants";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let frame: number | null = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const next = window.scrollY > 20;
        if (next !== scrolledRef.current) {
          scrolledRef.current = next;
          setScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 kali-nav-enter transition-[padding] duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{ paddingTop: `max(0.75rem, env(safe-area-inset-top, 0px))` }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 md:px-6 py-3 transition-colors duration-300 ${
            scrolled
              ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group touch-target -ml-1 pl-1">
            <Image
              src="/logo-icon.png"
              alt="KALI Systems"
              width={56}
              height={56}
              priority
              sizes="56px"
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold tracking-[0.14em] text-white">
                KALI
              </span>
              <span className="text-[9px] font-medium tracking-[0.28em] text-white/40 mt-0.5">
                SYSTEMS
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="btn-premium-light hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 min-h-[44px] rounded-full bg-white text-black hover:bg-white/95 transition-colors duration-300 hover:scale-[1.02] z-[1]"
            >
              <span className="relative z-[1] inline-flex items-center gap-2">
                Agendar una llamada
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden touch-target w-11 h-11 rounded-xl glass flex items-center justify-center"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Menú móvil"
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-[kali-nav-enter_0.35s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[48px] px-3 -mx-1 rounded-xl text-base text-white/80 active:bg-white/[0.06] active:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="btn-premium-light text-center bg-white text-black min-h-[48px] flex items-center justify-center rounded-full text-sm font-medium mt-2"
            >
              Agendar una llamada
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default memo(Navbar);
