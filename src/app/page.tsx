import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { UseCases } from "@/components/UseCases";
import { Technology } from "@/components/Technology";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { Pricing } from "@/components/Pricing";
import { About, FinalCTA } from "@/components/About";
import { Footer } from "@/components/Footer";

const MAIN_SECTIONS = [
  { key: "about", Component: About },
  { key: "products", Component: Products },
  { key: "use-cases", Component: UseCases },
  { key: "technology", Component: Technology },
  // { key: "cases", Component: CaseStudies }, // お客様事例セクション（一時的に非表示）
  { key: "process", Component: ImplementationProcess },
  { key: "pricing", Component: Pricing },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1A1A1A] bg-[#FAFAFA]">
      <Header />

      <main className="flex-1">
        <Hero />
        {MAIN_SECTIONS.map(({ key, Component }, index) => {
          const backgroundClass =
            index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]";
          return <Component key={key} backgroundClass={backgroundClass} />;
        })}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
