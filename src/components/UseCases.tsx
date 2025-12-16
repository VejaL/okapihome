import { USE_CASES_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function UseCases({
  backgroundClass = "bg-white",
}: {
  backgroundClass?: string;
}) {
  return (
    <section id="use-cases" className={`py-24 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Use Cases" eyebrow="ユースケース" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES_CONTENT.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition-all hover:border-[#1EB980]/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#1A1A1A]">{item.role}</h3>
                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-lg group-hover:bg-[#1EB980]/10 group-hover:text-[#1EB980] transition-colors">
                  →
                </div>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {item.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
