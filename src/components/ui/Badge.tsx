import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-[11px] text-neutral-200 border border-neutral-700">
      {children}
    </span>
  );
}

