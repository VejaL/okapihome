import { CASE_STUDIES } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-20 border-t border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="導入事例" />
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.name}
              className="rounded-3xl bg-white p-6 border border-neutral-200"
            >
              <p className="text-xs font-medium text-neutral-500 mb-1">
                Case 0{i + 1}
              </p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                {study.name}
                {study.titleSuffix}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

