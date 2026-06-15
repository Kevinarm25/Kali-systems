import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Footer from "@/components/Footer";
import DeferredClientShell from "@/components/DeferredClientShell";

const EcosystemConnected = dynamic(
  () => import("@/components/EcosystemConnected"),
  { loading: () => null }
);
const ProcessFlow = dynamic(() => import("@/components/ProcessFlow"), {
  loading: () => null,
});
const Scalability = dynamic(() => import("@/components/Scalability"), {
  loading: () => null,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="relative">
      <DeferredClientShell />
      <Navbar />
      <Hero />
      <Problems />
      <EcosystemConnected />
      <ProcessFlow />
      <Scalability />
      <Pricing />
      <Footer />
    </main>
  );
}
