import React from "react";

export function StepRow({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 text-[10px] font-semibold">
        {step}
      </div>
      <span>{label}</span>
    </div>
  );
}

