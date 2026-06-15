"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CheckCircle, CircleNotch, PaperPlaneTilt } from "@phosphor-icons/react";
import PremiumSection from "@/components/ui/PremiumSection";

const SERVICES = [
  "KALI Start",
  "KALI Growth",
  "KALI Infinity",
  "Sitio web",
  "Software o app a medida",
  "Otro",
];

const BUDGETS = [
  "Menos de $5,000 MXN",
  "$5,000 — $15,000 MXN",
  "$15,000 — $40,000 MXN",
  "Más de $40,000 MXN",
  "Aún no lo tengo definido",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulación visual mientras no hay backend
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
  };

  return (
    <PremiumSection id="contacto" className="section-pad px-5 sm:px-6 overflow-hidden" glow="contact">
      <div className="absolute inset-0 grid-bg opacity-20 section-fade pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.08] text-gradient-accent">
            Cuéntanos sobre tu negocio
          </h2>
          <p className="mt-4 sm:mt-5 text-white/55 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Te respondemos pronto con una propuesta adaptada a lo que necesitas.
          </p>
        </div>

        <div className="relative glass-strong rounded-3xl p-7 md:p-10 overflow-hidden border border-white/10 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.85)] transition-colors duration-300 hover:border-white/12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.16),transparent_62%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kali-accent/40 to-transparent" />

          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kali-accent to-kali-cyan flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(124,92,255,0.4)]">
                  <CheckCircle size={32} weight="regular" className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                  Solicitud recibida
                </h3>
                <p className="text-white/60 max-w-md">
                  Nos pondremos en contacto contigo pronto. Gracias por confiar
                  en KALI Systems.
                </p>
              </m.div>
            ) : (
              <m.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
              >
                <div>
                  <label className="form-label">Nombre completo</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Empresa o negocio</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Teléfono / WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+52 ..."
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Correo electrónico</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tucorreo@dominio.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Servicio de interés</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="form-input appearance-none cursor-pointer pr-11"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-kali-bg">
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 7.75L10 12.25L14.5 7.75"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="form-label">Presupuesto aproximado</label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-input appearance-none cursor-pointer pr-11"
                    >
                      <option value="" disabled>
                        Selecciona un rango
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-kali-bg">
                          {b}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 7.75L10 12.25L14.5 7.75"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos brevemente qué necesitas..."
                    className="form-input resize-none"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1 border-t border-white/10 mt-2">
                  <p className="text-xs text-white/40">
                    Al enviar aceptas nuestro{" "}
                    <a
                      href="/privacidad"
                      className="text-white/70 underline decoration-kali-accent/40 underline-offset-4 hover:decoration-kali-accent"
                    >
                      Aviso de Privacidad
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-premium-gradient group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-kali-accent to-kali-cyan text-white text-sm font-medium tracking-tight overflow-hidden transition disabled:opacity-70 shadow-[0_14px_42px_-22px_rgba(124,92,255,0.65)] z-[1]"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />
                    <span className="absolute -inset-8 hidden opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.16),transparent_62%)] blur-xl md:block" />
                    {status === "sending" ? (
                      <>
                        <CircleNotch size={16} weight="bold" className="animate-spin relative" />
                        <span className="relative">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative">Enviar mensaje</span>
                        <PaperPlaneTilt size={16} weight="regular" className="relative group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </m.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PremiumSection>
  );
}
