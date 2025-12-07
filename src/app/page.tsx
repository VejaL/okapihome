import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { ProductDemo } from "@/components/ProductDemo";
import { TechnicalCapabilities } from "@/components/TechnicalCapabilities";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />
        <CaseStudies />
        <ProductDemo />
        <TechnicalCapabilities />
        <ImplementationProcess />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
