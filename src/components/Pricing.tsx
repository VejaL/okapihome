import { PRICING_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Pricing({
  backgroundClass = "bg-[#FAFAFA]",
}: {
  backgroundClass?: string;
}) {
  return (
    <section id="pricing" className={`py-24 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Engagement Model" eyebrow="ご支援プラン" />

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_CONTENT.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 border ${
                i === 1 ? "border-[#1EB980] shadow-lg scale-105 z-10" : "border-neutral-200 shadow-sm"
              }`}
            >
              {i === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1EB980] text-white px-3 py-1 rounded-full text-xs font-bold">
                  おすすめ
                </div>
              )}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{plan.name}</h3>
              <p className="text-sm font-bold text-[#1EB980] mb-6">{plan.target}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed min-h-[72px]">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-[#6B6B6B]">
            ※ 企業規模・対象業務・システム構成により個別お見積りとなります。まずはお気軽にご相談ください。
          </p>
        </div>
      </div>
    </section>
  );
}

