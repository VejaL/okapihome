import { BENEFITS_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0041C4] opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1EB980] opacity-5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
           <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#1EB980] mb-2">
             Benefits
           </p>
           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
             導入メリット
           </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Quantitative */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#1EB980] flex items-center justify-center text-sm text-[#1A1A1A] font-bold">1</span>
              定量効果
            </h3>
            <div className="grid gap-4">
              {BENEFITS_CONTENT.quantitative.map((text, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <p className="font-medium text-lg text-neutral-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Qualitative */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#0041C4] flex items-center justify-center text-sm text-white font-bold">2</span>
              定性効果
            </h3>
            <div className="grid gap-4">
              {BENEFITS_CONTENT.qualitative.map((text, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <p className="font-medium text-lg text-neutral-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

