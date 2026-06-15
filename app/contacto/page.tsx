import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeferredClientShell from "@/components/DeferredClientShell";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => null,
});

export const metadata = {
  title: "Contacto — KALI Systems",
  description:
    "Agenda una llamada con KALI Systems. Cuéntanos sobre tu negocio y diseñamos la solución ideal para ti.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <DeferredClientShell />
      <Navbar />
      <div className="pt-24 sm:pt-28">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
