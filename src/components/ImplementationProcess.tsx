import { IMPLEMENTATION_STEPS } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ImplementationProcess() {
  return (
    <section className="py-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="導入までの流れ" />
        <ol className="grid gap-6 md:grid-cols-4 text-sm">
          {IMPLEMENTATION_STEPS.map((s, idx) => (
            <li key={s.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-semibold">
                  {idx + 1}
                </div>
                <h3 className="font-medium text-neutral-900">{s.title}</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

