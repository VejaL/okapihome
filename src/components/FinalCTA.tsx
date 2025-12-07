import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-16 bg-neutral-900 text-neutral-50 border-t border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-8 sm:p-10 border border-neutral-700">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              まずは、どこから AI エージェントを入れるべきか一緒に考えませんか？
            </h2>
            <p className="text-sm text-neutral-300">
              現状の業務やシステム構成を簡単に共有いただければ、導入余地のあるユースケースや
              PoC の進め方をご提案します。
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:info@example.com" // TODO: 换成你的邮箱
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              メールでお問い合わせ
            </a>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-neutral-500 px-6 py-3 text-sm font-medium text-neutral-50 hover:bg-neutral-800 transition-colors"
            >
              資料ダウンロード（準備中）
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

