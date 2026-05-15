"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export default function Navbar() {
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

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[padding] duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 md:px-6 py-3 transition-colors duration-500 ${
            scrolled
              ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo-icon.png"
              alt="KALI Systems"
              width={56}
              height={56}
              priority
              className="w-14 h-14 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
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
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-light hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-white/95 transition-colors duration-300 hover:scale-[1.02] z-[1]"
            >
              <span className="relative z-[1] inline-flex items-center gap-2">
                Comenzar
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center"
              aria-label="Menú"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-5 flex flex-col gap-4"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-light text-center bg-white text-black py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors duration-300"
            >
              Comenzar
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
