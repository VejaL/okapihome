import Link from "next/link";
import { HERO_CONTENT } from "@/data/landing-page";

export function Hero() {
  return (
    <section className="relative pt-[calc(var(--header-height)+80px)] pb-24 lg:pt-[calc(var(--header-height)+100px)] lg:pb-32 bg-[#FAFAFA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={HERO_CONTENT.cta.primary.href}
                className="inline-flex items-center justify-center rounded-lg bg-[#1A1A1A] px-8 py-4 text-base font-bold text-white hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {HERO_CONTENT.cta.primary.label}
              </Link>
            </div>
          </div>

          {/* Abstract Visual / Animation Placeholder */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1EB980]/10 to-[#0041C4]/10 border border-neutral-200 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0,_transparent_70%)] opacity-50" />
            <div className="relative z-10 text-center space-y-4 p-8">
              <div className="inline-block p-4 rounded-2xl bg-white shadow-xl mb-4">
                <span className="text-4xl">🤖</span>
              </div>
              <p className="font-bold text-[#1A1A1A] text-xl">AI Agent Working...</p>
              <div className="flex gap-2 justify-center text-xs text-[#6B6B6B]">
                <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-neutral-100">Analyzing</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-neutral-100">Planning</span>
                <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-neutral-100">Executing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mt-24">
          <p className="text-center text-sm font-bold text-[#6B6B6B] tracking-wider uppercase mb-8">
            ビジネス現場が直面する3つの課題
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {HERO_CONTENT.challenges.map((challenge, i) => (
              <div
                key={i}
                className="bg-neutral-100 rounded-2xl p-6 border border-neutral-200 text-neutral-400"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-neutral-500 text-lg mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          {/* Generic AI Package Difficulties */}
          <p className="text-center text-sm font-bold text-[#6B6B6B] tracking-wider uppercase mb-8 mt-14">
            汎用AIパッケージ導入の3つの困難
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-red-900 text-lg mb-2">
                自社フローに直接組み込めない
              </h3>
              <p className="text-sm text-red-900/80 leading-relaxed">
                パッケージの仕様に合わせるために前後処理や変換レイヤーを自社側で追加開発する必要が生じ、導入コストが増大する。
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-red-900 text-lg mb-2">
                業務特化でないため精度が出ない
              </h3>
              <p className="text-sm text-red-900/80 leading-relaxed">
                業界・業務特有の例外パターンや判断基準を扱えず、出力が「一般論」に留まり、現場で最後まで使える品質にならない。
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-red-900 text-lg mb-2">
                N+1問題：システムが増えて管理が複雑化
              </h3>
              <p className="text-sm text-red-900/80 leading-relaxed">
                既存のN個の業務システムに加えて新しい1つのツールが増えるだけで、データ同期・管理・運用負荷がむしろ増加してしまう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
