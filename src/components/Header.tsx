"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/landing-page";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-[var(--header-height)] items-center justify-between">
        {/* logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="オカピＡＩエージェント株式会社 ロゴ"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-base font-bold tracking-wide text-neutral-900">
            オカピＡＩエージェント株式会社
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* desktop CTA + mobile menu button */}
        <div className="flex items-center gap-4">
          {/* desktop CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-neutral-800 transition-colors shadow-sm"
          >
            お問い合わせ
          </Link>

          {/* mobile menu button */}
          <button
            type="button"
            aria-label="メニューを開閉"
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white p-2 text-neutral-800 hover:bg-neutral-100 transition-colors"
          >
            <span className="sr-only">メニュー</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-900 transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-900 transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-900 transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* mobile nav panel */}
      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-1 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-neutral-900 px-3 py-2 text-center text-sm font-bold text-white hover:bg-neutral-800 transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
