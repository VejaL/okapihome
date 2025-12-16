import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { UseCases } from "@/components/UseCases";
import { Technology } from "@/components/Technology";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { Pricing } from "@/components/Pricing";
import { About, FinalCTA } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1A1A1A] bg-[#FAFAFA]">
      <Header />

      <main className="flex-1">
        <Hero />
        <About /> {/* Okapiとは section uses About component but named About in IA, repurposed here */}
        <Products />
        <UseCases />
        <Technology />
        {/* <CaseStudies />  お客様事例セクション（一時的に非表示） */}
        <ImplementationProcess />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
