import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import ContactForm from "@/components/ContactForm";
import TrustBadges from "@/components/TrustBadges";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Industries />
      <Features />
      <Metrics />
      <ContactForm />
      <TrustBadges />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
