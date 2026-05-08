import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/ui/MouseGlow";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Industries />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  );
}
