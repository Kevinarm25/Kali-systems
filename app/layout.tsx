import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KALI Systems — Automatización con IA para negocios modernos",
  description:
    "Sistemas premium de automatización con IA. WhatsApp, Instagram, CRM, captación de leads y seguimiento inteligente para escalar tu negocio 24/7.",
  openGraph: {
    title: "KALI Systems",
    description: "Automatización con IA para negocios modernos",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-kali-black text-white antialiased selection:bg-kali-accent/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
