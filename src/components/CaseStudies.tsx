import { CASE_STUDIES_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Case Studies" eyebrow="お客様事例" />

        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES_CONTENT.map((study, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-xs font-bold text-neutral-600 mb-4">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  {study.title}
                </h3>
                <div className="bg-[#1EB980]/5 rounded-xl p-4 border border-[#1EB980]/10">
                  <span className="text-sm font-bold text-[#1EB980] block mb-1">RESULT</span>
                  <p className="text-[#1A1A1A] font-medium">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
