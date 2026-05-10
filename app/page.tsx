import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import AmbientCursorGlow from "@/components/ui/AmbientCursorGlow";

export default function Home() {
  return (
    <main className="relative">
      <AmbientCursorGlow />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Industries />
      <Features />
      <Metrics />
      <Pricing />
      <ContactForm />
      <TrustBadges />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
