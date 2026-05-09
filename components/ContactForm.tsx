"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const SERVICES = [
  "Automatización de WhatsApp",
  "Automatización Instagram / Facebook",
  "CRM y seguimiento automático",
  "Captura y calificación de leads",
  "Sistema integral de IA",
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
    <section id="contacto" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 section-fade pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-kali-accent/80 mb-4">
            Contacto directo
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gradient-accent">
            Hablemos de tu negocio
          </h2>
          <p className="mt-5 text-white/55 max-w-xl mx-auto">
            Cuéntanos qué necesitas automatizar y diseñaremos una solución a la
            medida de tu operación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.1),transparent_60%)]" />

          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kali-accent to-kali-cyan flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(124,92,255,0.4)]">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                  Solicitud recibida
                </h3>
                <p className="text-white/60 max-w-md">
                  Nos pondremos en contacto contigo pronto. Gracias por confiar
                  en KALI Systems.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-5"
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
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="form-input appearance-none cursor-pointer"
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
                </div>

                <div>
                  <label className="form-label">Presupuesto aproximado</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="form-input appearance-none cursor-pointer"
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

                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
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
                    className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-kali-accent to-kali-cyan text-white text-sm font-medium tracking-tight overflow-hidden transition disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin relative" />
                        <span className="relative">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative">Enviar solicitud</span>
                        <Send className="w-4 h-4 relative group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
