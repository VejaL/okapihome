// src/app/page.tsx
import Link from "next/link";

const NAV_ITEMS = [
  { label: "サービス", href: "#services" },
  { label: "導入事例", href: "#cases" },
  { label: "ソリューション", href: "#solutions" },
  { label: "製品紹介", href: "#product" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />
        <CaseStudies />
        <ProductDemo />
        <TechnicalCapabilities />
        <ImplementationProcess />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
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

function Hero() {
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
            We build intelligent
            <br />
            AI agents for your business.
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-neutral-600 leading-relaxed">
            エンタープライズ環境に合わせて設計された AI エージェント / RAG /
            業務自動化ソリューションを、要件整理から PoC・本番導入まで一気通貫で支援します。
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              無料相談を予約
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              サービスを見る
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-500">
            <span>・エンタープライズ SSO / SAML 対応</span>
            <span>・オンプレ / VPC 環境にも対応</span>
            <span>・日本語業務フローの設計経験あり</span>
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-[11px] text-neutral-200 border border-neutral-700">
      {children}
    </span>
  );
}

function StepRow({ step, label }: { step: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 text-[10px] font-semibold">
        {step}
      </div>
      <span>{label}</span>
    </div>
  );
}

function SectionTitle({
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

function Services() {
  const services = [
    {
      title: "エンタープライズ向け AI エージェント",
      body: "顧客サポート、社内ヘルプデスク、業務マニュアル検索など、既存の業務フローに合わせて AI エージェントを設計・構築します。",
    },
    {
      title: "ナレッジ統合と RAG",
      body: "Wiki、ファイルサーバー、SaaS など散在する情報を統合し、権限を保ったまま検索・回答できるナレッジ基盤を構築します。",
    },
    {
      title: "マルチモーダル AI & 自動化",
      body: "音声・テキスト・ファイルを組み合わせたマルチモーダルなエージェントと、既存システム連携による業務自動化を実現します。",
    },
    {
      title: "セキュリティとデプロイ",
      body: "IP 制限、監査ログ、SSO / SAML、プライベート環境へのデプロイなど、エンタープライズ要件に合わせた運用を設計します。",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="サービス" />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-20 border-t border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="導入事例" />
        <div className="grid gap-6 md:grid-cols-3">
          {["メディア企業", "SaaS 事業者", "社内 IT 部門"].map((name, i) => (
            <div
              key={name}
              className="rounded-3xl bg-white p-6 border border-neutral-200"
            >
              <p className="text-xs font-medium text-neutral-500 mb-1">
                Case 0{i + 1}
              </p>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                {name}向け AI エージェント
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                FAQ 対応の自動化や、社内ナレッジ検索の効率化など、PoC から本番運用まで支援した事例です。
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDemo() {
  return (
    <section id="product" className="py-20 bg-neutral-900 text-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="製品紹介"
          eyebrow="DEMO"
        />

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Demo mock */}
          <div className="rounded-3xl bg-neutral-950 p-6 border border-neutral-800 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-neutral-400">Okapi Demo</span>
              <span className="text-[11px] rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
                Online
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="rounded-2xl bg-neutral-900 p-3">
                <div className="text-neutral-400 mb-1">ユーザー</div>
                <p className="text-neutral-100">
                  「社外向けの AI 利用ポリシーのドラフトを作成して」
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-800 p-3">
                <div className="text-neutral-400 mb-1">Okapi Agent</div>
                <p className="text-neutral-50">
                  既存の規程・契約書・社内ナレッジを参照しながら、草案を自動生成。  
                  参照したドキュメントも一緒に提示します。
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-900 p-3">
                <p className="text-neutral-200">
                  このデモは別ドメインで公開予定です。本番導入前の PoC として利用いただけます。
                </p>
              </div>
            </div>
          </div>

          {/* Copy + buttons */}
          <div className="space-y-5 text-sm">
            <p className="text-neutral-200">
              「Okapi Demo」は、ナレッジ連携・権限管理・チャット UI など、エンタープライズ
              AI エージェントの基本機能を一通り触っていただけるデモ環境です。
            </p>
            <ul className="space-y-2 text-neutral-300">
              <li>・ナレッジアップロードと RAG の挙動を確認</li>
              <li>・エージェントのプロンプト / 方針をカスタマイズ</li>
              <li>・日本語業務での応答品質を事前検証</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://demo.example.com" // TODO: 换成你真实的新域名
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                新ページへ（デモを見る）
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-500 px-6 py-3 text-xs font-medium text-neutral-50 hover:bg-neutral-800 transition-colors"
              >
                導入相談をする
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalCapabilities() {
  const items = [
    "スケーラブルなクラウド / コンテナ構成",
    "SSO / SAML / IP 制限などのエンタープライズ認証",
    "モデルベンダーを跨いだマルチモデル構成",
    "ログ・監査・トレーシングを前提にした設計",
  ];

  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Technical capabilities"
          eyebrow="TECH STACK"
        />
        <ul className="grid gap-4 text-sm text-neutral-700 md:grid-cols-2">
          {items.map((text) => (
            <li
              key={text}
              className="rounded-2xl bg-white p-4 border border-neutral-200"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ImplementationProcess() {
  const steps = [
    {
      title: "課題のヒアリング",
      body: "現状の業務フローやシステム構成を伺い、AI エージェントが価値を出しやすいポイントを一緒に整理します。",
    },
    {
      title: "PoC / デモ設計・実施",
      body: "限定されたスコープで PoC を実施し、品質・運用イメージ・社内受容性を確認します。",
    },
    {
      title: "導入・展開",
      body: "本番環境への組み込み、権限設定、運用担当者さまへのトレーニングを行います。",
    },
    {
      title: "継続的な改善",
      body: "ログ分析やフィードバックを元に、プロンプトやワークフローを継続的にチューニングします。",
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="導入までの流れ" />
        <ol className="grid gap-6 md:grid-cols-4 text-sm">
          {steps.map((s, idx) => (
            <li key={s.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-semibold">
                  {idx + 1}
                </div>
                <h3 className="font-medium text-neutral-900">{s.title}</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCTA() {
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

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-neutral-500">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} Okapi AI Agents</span>
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
