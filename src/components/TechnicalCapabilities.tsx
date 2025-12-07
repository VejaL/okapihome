import { TECHNICAL_CAPABILITIES } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TechnicalCapabilities() {
  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Technical capabilities" eyebrow="TECH STACK" />
        <ul className="grid gap-4 text-sm text-neutral-700 md:grid-cols-2">
          {TECHNICAL_CAPABILITIES.map((text) => (
            <li
              key={text}
              className="rounded-2xl bg-white p-4 border border-neutral-200"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

