"use client";

import { Bank } from "@phosphor-icons/react";
import {
  SiAmericanexpress,
  SiMastercard,
  SiMercadopago,
  SiPaypal,
  SiVisa,
} from "react-icons/si";

const METHODS = [
  { icon: SiVisa, label: "Visa", className: "h-[11px] w-[34px]" },
  { icon: SiMastercard, label: "Mastercard", className: "h-4 w-6" },
  {
    icon: SiAmericanexpress,
    label: "American Express",
    className: "h-3.5 w-[38px]",
  },
  { icon: SiPaypal, label: "PayPal", className: "h-3.5 w-[38px]" },
  { icon: Bank, label: "Transferencia bancaria", className: "h-3.5 w-3.5" },
  { icon: SiMercadopago, label: "Mercado Pago", className: "h-4 w-4" },
];

export default function PaymentMethods() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6 border-t border-white/[0.06]">
      <p className="text-[10px] uppercase tracking-[0.22em] text-white/35 shrink-0">
        Métodos de pago aceptados
      </p>

      <ul className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {METHODS.map(({ icon: Icon, label, className }) => (
          <li key={label}>
            <span
              className="group flex h-8 min-w-[2.75rem] items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 text-white/35 transition-colors duration-300 hover:border-kali-accent/25 hover:bg-white/[0.04] hover:text-white/55"
              aria-label={label}
              title={label}
            >
              <Icon className={`${className} shrink-0`} aria-hidden />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
