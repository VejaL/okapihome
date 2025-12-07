import React from "react";

export function SectionTitle({
  id,
  label,
  eyebrow,
}: {
  id?: string;
  label: string;
  eyebrow?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.16em] uppercase text-neutral-400">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900"
      >
        {label}
      </h2>
    </div>
  );
}

