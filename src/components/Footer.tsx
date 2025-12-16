import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-neutral-500">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} オカピＡＩエージェント株式会社</span>
          <span>All rights reserved.</span>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-neutral-800">
            プライバシーポリシー
          </Link>
          <Link href="#" className="hover:text-neutral-800">
            利用規約
          </Link>
        </div>
      </div>
    </footer>
  );
}

