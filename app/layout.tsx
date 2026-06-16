import { Inter } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KALI Systems — Hacemos crecer negocios con tecnología",
  description:
    "Sitios web, inteligencia artificial, automatización, software y herramientas diseñadas para ayudarte a vender más, ahorrar tiempo y mantener tu negocio organizado.",
  openGraph: {
    title: "KALI Systems",
    description: "Hacemos crecer negocios con tecnología",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-kali-black text-white antialiased selection:bg-kali-accent/40 selection:text-white">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
