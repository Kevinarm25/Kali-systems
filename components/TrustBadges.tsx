"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

const PAYMENTS = [
  { name: "Visa", label: "VISA" },
  { name: "Mastercard", label: "Mastercard" },
  { name: "American Express", label: "AMEX" },
  { name: "Stripe", label: "stripe" },
];

export default function TrustBadges() {
  return (
    <section className="relative py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-white/60 mb-5">
            <Lock className="w-3.5 h-3.5 text-kali-cyan" />
            Pagos con tranquilidad
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Cuando pagas con nosotros, tu información va protegida
          </h3>
          <p className="mt-3 text-sm text-white/50 max-w-xl mx-auto">
            Usamos procesadores reconocidos y buenas prácticas para que cada transacción se sienta segura y simple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {PAYMENTS.map((p) => (
            <div
              key={p.name}
              className="group relative px-6 py-4 rounded-2xl glass min-w-[130px] text-center hover:border-white/20 transition-all"
            >
              <span className="text-base md:text-lg font-semibold tracking-wide text-white/80 group-hover:text-white transition">
                {p.label}
              </span>
            </div>
          ))}

          <div className="flex items-center gap-2 px-5 py-4 rounded-2xl glass">
            <ShieldCheck className="w-4 h-4 text-kali-cyan" />
            <span className="text-xs text-white/60">SSL · Encriptación 256-bit</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

