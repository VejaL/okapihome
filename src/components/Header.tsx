import Link from "next/link";
import { NAV_ITEMS } from "@/data/landing-page";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-[var(--header-height)] items-center justify-between">
        {/* logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
            {/* 占位：未来可以换成真实 SVG logo */}
            <span className="text-xl leading-none">O</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              Okapi AI Agents
            </span>
            <span className="text-xs text-neutral-500">
              Intelligent Agent Solutions
            </span>
          </div>
        </Link>

        {/* nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
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

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
}

