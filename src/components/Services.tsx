import { SERVICES_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Services() {
  return (
    <section
      id="services"
      className="py-20 border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="サービス" />
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES_CONTENT.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

