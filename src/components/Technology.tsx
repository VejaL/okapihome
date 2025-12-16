import { TECH_SECURITY_CONTENT } from "@/data/landing-page";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Technology({
  backgroundClass = "bg-[#FAFAFA]",
}: {
  backgroundClass?: string;
}) {
  return (
    <section id="technology" className={`py-24 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Technology & Security" eyebrow="技術・セキュリティ" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Security */}
          <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-neutral-200">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-[#0041C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-bold text-[#1A1A1A]">安全性・セキュリティ</h3>
            </div>
            <ul className="space-y-4">
              {TECH_SECURITY_CONTENT.security.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1A1A1A]">
                  <span className="w-5 h-5 rounded-full bg-[#0041C4]/10 flex items-center justify-center text-[#0041C4] text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-neutral-200">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-[#1EB980]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-xl font-bold text-[#1A1A1A]">技術基盤</h3>
            </div>
            <ul className="space-y-4">
              {TECH_SECURITY_CONTENT.techStack.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1A1A1A]">
                  <span className="w-5 h-5 rounded-full bg-[#1EB980]/10 flex items-center justify-center text-[#1EB980] text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Package vs Full Custom Comparison */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 text-sm text-neutral-700">
          <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-neutral-200">
            <p className="text-xs font-bold text-neutral-500 uppercase mb-2">
              一般的な AI パッケージで起こりがちなこと
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>既存システムに合わせるための前後処理を別途開発する必要がある</li>
              <li>パッケージの入力・出力仕様に現場の業務を合わせることになる</li>
              <li>業界特有の例外パターンや例外フローが十分に扱えない</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#1EB980]/30">
            <p className="text-xs font-bold text-[#1EB980] uppercase mb-2">
              Okapi が大事にしているアプローチ
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>現場の業務プロセスとデータ構造を起点に設計する</li>
              <li>入力・出力・メモリ構造・ワークフローをフルカスタムで設計</li>
              <li>既存システムと連携する変換レイヤーまで含めて実装</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
