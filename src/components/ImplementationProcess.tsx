import { IMPLEMENTATION_STEPS } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ImplementationProcess() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Process" eyebrow="導入プロセス" />

        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-neutral-200 z-0" />

          {IMPLEMENTATION_STEPS.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col md:items-center">
               {/* Step Circle */}
               <div className="w-14 h-14 rounded-full bg-white border-2 border-[#1EB980] flex items-center justify-center text-[#1EB980] font-bold shadow-sm mb-6 shrink-0">
                 {i + 1}
               </div>
               
               <div className="md:text-center">
                 <p className="text-xs font-bold text-[#1EB980] uppercase tracking-wider mb-1">
                   {step.step}
                 </p>
                 <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                   {step.title}
                 </h3>
                 <p className="text-sm font-medium text-[#6B6B6B]">
                   {step.duration}
                 </p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#1A1A1A] font-bold">最短1ヶ月で利用開始できます。</p>
        </div>
      </div>
    </section>
  );
}

