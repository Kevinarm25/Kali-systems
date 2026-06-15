const WA_BASE = "https://wa.me/5660873677";

export function waLink(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = waLink(
  "Hola KALI Systems, me gustaría conocer sus soluciones."
);

export const WHATSAPP_LINK = WHATSAPP_URL;
export const WHATSAPP_DIAGNOSTIC = waLink(
  "Hola KALI Systems, me gustaría agendar una llamada."
);
export const WHATSAPP_ECOSYSTEM = waLink(
  "Hola KALI Systems, me gustaría hablar con un especialista sobre una solución personalizada."
);
export const WHATSAPP_MODERNIZE = waLink(
  "Hola KALI Systems, me gustaría solicitar una propuesta para KALI Growth."
);
export const WHATSAPP_PROPOSAL = waLink(
  "Hola KALI Systems, me gustaría solicitar una propuesta."
);
export const WHATSAPP_DEMO = waLink(
  "Hola KALI Systems, quiero ver cómo funcionaría en mi negocio."
);

export const INSTAGRAM_LINK =
  "https://www.instagram.com/kalisystems.ai/";

export const FACEBOOK_LINK =
  "https://facebook.com/TUPAGINA";

export const EMAIL =
  "contacto@kalisystems.mx";

export const NAV_LINKS = [
  { href: "/#problemas", label: "Soluciones" },
  { href: "/#ecosistema", label: "Ecosistema" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#escalabilidad", label: "Escalabilidad" },
  { href: "/#precios", label: "Paquetes" },
  { href: "/contacto", label: "Contacto" },
];
