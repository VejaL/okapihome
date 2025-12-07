import Link from "next/link";
import { MISSION_CONTENT, CONTACT_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle label="About Us" eyebrow="会社情報" />
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#1A1A1A] leading-tight">
                {MISSION_CONTENT.mission}
              </h3>
              <p className="text-lg text-[#6B6B6B]">
                {MISSION_CONTENT.description}
              </p>
              {MISSION_CONTENT.positioning && (
                <p className="text-sm text-[#4B4B4B] leading-relaxed border-l-2 border-[#1EB980] pl-4 mt-4">
                  {MISSION_CONTENT.positioning}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {MISSION_CONTENT.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-neutral-200"
              >
                <h4 className="font-bold text-[#1A1A1A] mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-[#6B6B6B]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-4xl px-4 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {CONTACT_CONTENT.title}
        </h2>
        <p className="text-lg text-neutral-300">
          {CONTACT_CONTENT.subtitle}
        </p>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-[#1A1A1A] mt-12 shadow-2xl">
           <h3 className="text-xl font-bold mb-2">まずは無料相談から</h3>
           <p className="text-[#6B6B6B] mb-8">{CONTACT_CONTENT.cta.subtext}</p>
           
           <Link
             href="mailto:contact@okapi.ai"
             className="inline-flex items-center justify-center rounded-lg bg-[#1EB980] px-8 py-4 text-base font-bold text-white hover:bg-[#16a570] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
           >
             {CONTACT_CONTENT.cta.text}
           </Link>
        </div>
      </div>
    </section>
  );
}
