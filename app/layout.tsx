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
    "IA respondiendo clientes en WhatsApp e Instagram, seguimiento inteligente y negocio más ordenado — respuestas 24/7 sin perder el ritmo.",
  openGraph: {
    title: "KALI Systems",
    description: "Automatización con IA para negocios modernos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-kali-black text-white antialiased selection:bg-kali-accent/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
