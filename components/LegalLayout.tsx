"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GradientOrb from "./ui/GradientOrb";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 grid-bg opacity-25 section-fade pointer-events-none" />
      <GradientOrb className="w-[500px] h-[500px] -left-40 top-32" color="purple" />
      <GradientOrb className="w-[400px] h-[400px] -right-32 top-96" color="cyan" delay={2} />

      <section className="relative z-10 pt-36 md:pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Volver al inicio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="relative glass-strong rounded-3xl border border-white/10 px-7 py-7 md:px-10 md:py-9 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.14),transparent_60%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kali-accent/40 to-transparent" />
              <p className="relative text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-3">
                {eyebrow}
              </p>
              <h1 className="relative text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-gradient-accent">
                {title}
              </h1>
              {lastUpdated && (
                <p className="relative mt-4 text-sm text-white/40">
                  Última actualización: {lastUpdated}
                </p>
              )}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative glass rounded-3xl p-7 md:p-10 overflow-hidden border border-white/10 shadow-[0_18px_80px_-44px_rgba(0,0,0,0.85)]"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.08),transparent_60%)]" />
            <div className="relative legal-prose">{children}</div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
