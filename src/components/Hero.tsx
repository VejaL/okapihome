import Link from "next/link";
import { HERO_CONTENT } from "@/data/landing-page";
import { Badge } from "@/components/ui/Badge";
import { StepRow } from "@/components/ui/StepRow";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-[calc(var(--header-height)+64px)] pb-24"
    >
      {/* 背景环形装饰 */}
      <div className="pointer-events-none absolute inset-y-0 right-0 left-1/2 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.06)_0,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12 lg:flex-row lg:items-center">
        {/* 文案 */}
        <div className="flex-1 space-y-6">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900"
          >
            {HERO_CONTENT.title}
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-neutral-600 leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={HERO_CONTENT.cta.primary.href}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              {HERO_CONTENT.cta.primary.label}
            </Link>
            <Link
              href={HERO_CONTENT.cta.secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              {HERO_CONTENT.cta.secondary.label}
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-500">
            {HERO_CONTENT.features.map((feature, i) => (
              <span key={i}>{feature}</span>
            ))}
          </div>
        </div>

        {/* 右侧 mock UI 卡片 */}
        <div className="flex-1">
          <div className="mx-auto max-w-md rounded-[32px] bg-neutral-900 p-5 text-sm text-neutral-100 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-neutral-300">
                Enterprise AI Agent Console
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl bg-neutral-800/80 p-3">
                <div className="text-xs text-neutral-400 mb-1">
                  ナレッジソース
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge>社内 Wiki</Badge>
                  <Badge>FAQ PDF</Badge>
                  <Badge>CRM データ</Badge>
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-800/80 p-3 space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>エージェント・フロー</span>
                  <span>3 steps</span>
                </div>
                <StepRow step="1" label="意図の解析 &amp; 権限チェック" />
                <StepRow step="2" label="関連ドキュメントの検索 / RAG" />
                <StepRow step="3" label="回答生成 &amp; ログ保存" />
              </div>
              <div className="rounded-2xl bg-neutral-100 text-neutral-900 p-3 mt-2">
                <div className="text-xs text-neutral-500 mb-1">
                  Chat with knowledge
                </div>
                <p className="text-xs">
                  「3 月の請求書テンプレート」を Slack で聞かれたとき、権限制御された
                  AI エージェントが自動で回答します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

