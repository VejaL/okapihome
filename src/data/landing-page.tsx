import React from "react";

// --- Navigation ---
export const NAV_ITEMS = [
  { label: "Okapiとは", href: "#about" },
  { label: "サービス", href: "#products" },
  { label: "ユースケース", href: "#use-cases" },
  { label: "事例", href: "#cases" },
  { label: "料金プラン", href: "#pricing" },
  { label: "ブログ", href: "/blog" },
];

// --- Hero Section ---
export const HERO_CONTENT = {
  title: (
    <>
      企業の業務を理解し、自ら動くAIエージェント。
      <br />
      <span className="text-2xl sm:text-3xl md:text-4xl text-neutral-500 mt-6 block font-normal leading-relaxed">
        Okapi AI Agent — パッケージではなく、御社の業務に合わせて設計する
        「フルカスタム型 AI エージェントパートナー」。
      </span>
    </>
  ),
  subtitle:
    "日々の問い合わせ対応、資料作成、データ整理、社内調整など、人が時間をかけて対応していた業務を、AI が正確かつ高速にサポートします。御社の既存フローに合わせて設計するため、「ツールに現場を合わせる」のではなく、「AI を現場に合わせる」ことが前提です。",
  cta: {
    primary: { label: "30分でわかる無料デモを予約する", href: "#contact" },
  },
  challenges: [
    {
      title: "慢性的な人材不足・採用難",
      description: "採用が追いつかず、現場の負担が増え続けている。",
    },
    {
      title: "増え続けるSaaSによる情報分散",
      description: "必要な情報が見つからず、探す時間が肥大化している。",
    },
    {
      title: "属人化・手作業によるミスの増加",
      description: "特定の担当者に依存し、業務リスクが高まっている。",
    },
  ],
  solution: "Okapi AI Agentが“デジタル人材”として貢献",
  values: [
    {
      title: "同時に複数業務を処理",
      description: "AIなら24時間365日、並列でタスクをこなせます。",
    },
    {
      title: "標準化された品質",
      description: "担当者によるバラつきをなくし、一定品質を担保。",
    },
    {
      title: "組織に知識を蓄積",
      description: "業務ナレッジをAIに学習させ、資産化します。",
    },
    {
      title: "業務時間を大幅削減",
      description: "定型業務を任せることで、創造的な業務に集中。",
    },
  ],
};

// --- About (Mission) Section ---
export const MISSION_CONTENT = {
  title: "オカピＡＩエージェント株式会社とは",
  mission: "人とAIが協働し、創造性の最大化を目指す社会をつくる",
  description: "AIは人の代わりではなく、最高の相棒となる存在です。",
  positioning:
    "オカピＡＩエージェント株式会社は、既製品の AI パッケージではありません。お客様ごとの業務プロセス・既存システム・業界特性に合わせて設計する「フルカスタム型の AI エージェント / 業務自動化ソリューション」を提供します。",
  features: [
    {
      title: "自律性",
      description: "業務を理解し、計画し、実行する",
    },
    {
      title: "長期記憶",
      description: "組織の知識を蓄積・活用する",
    },
    {
      title: "協働能力",
      description: "複数エージェントが連携して動く",
    },
    {
      title: "安全性",
      description: "企業利用に必要な透明性とセキュリティ",
    },
  ],
};

// --- Products Section ---
export const PRODUCTS_CONTENT = [
  {
    id: "os",
    title: "Okapi Agent Foundation",
    subtitle: "エージェント基盤 + フルカスタム設計",
    description:
      "毎回ゼロから作り直すのではなく、Okapi 独自の「エージェント基盤（Foundation）」の上に、御社専用の AI エージェントをフルカスタムで構築します。",
    features: [
      "Memory（知識・長期記憶基盤）",
      "Planner（業務プロセスに合わせた計画エンジン）",
      "Executor（システム連携を含む実行エンジン）",
      "Orchestrator（複数エージェントの協調制御）",
      "Audit Log（行動と判断理由の可視化・監査ログ）",
    ],
    integrations: [
      "Slack / Teams",
      "Salesforce / HubSpot",
      "Google Workspace / Notion",
      "社内DB / API",
    ],
  },
  {
    id: "business-agent",
    title: "カスタム AI エージェント設計・開発",
    subtitle: "業務プロセスに合わせたエージェント構築支援",
    description:
      "業界・ビジネスモデル・既存の業務フローを踏まえたうえで、プロンプト設計、メモリ構造、ツール連携、例外処理ロジックまで含めた「御社専用エージェント」を設計・実装します。",
    features: [
      "ヒアリングを通じた現状業務の整理・可視化",
      "入力フォーマット・出力テンプレートの設計",
      "プロンプト / メモリ / 評価指標の設計",
      "段階的な PoC → 本番導入",
    ],
  },
  {
    id: "workflow",
    title: "システム連携・ワークフロー自動化",
    subtitle: "「n+1 の新システム」を増やさない自動化設計",
    description:
      "既にお使いの SaaS や社内システム（CRM、チャット、グループウェアなど）と連携し、前後処理や変換レイヤーも含めて一気通貫で自動化します。エージェント導入のためだけに、現場に別の画面や新ツールを強いることはありません。",
    examples: [
      "Slack / Teams などから自然言語で指示",
      "既存の申請フロー・承認ルールとの連携",
      "Excel / PDF / メールなどの前後処理自動化",
      "運用開始後のルール調整・改善サイクル",
    ],
  },
];

// --- Use Cases Section ---
export const USE_CASES_CONTENT = [
  {
    role: "カスタマーサポート",
    example: "チャット対応、情報収集、FAQ生成",
  },
  {
    role: "営業",
    example: "案件整理、報告書、フォローアップ",
  },
  {
    role: "経理",
    example: "支払データ整理、請求書チェック",
  },
  {
    role: "IT部門",
    example: "アカウント作成、1次対応",
  },
  {
    role: "バックオフィス",
    example: "FAQ、通知、自動案内",
  },
];

// --- Benefits Section ---
export const BENEFITS_CONTENT = {
  quantitative: [
    "作業時間を 30〜70%削減",
    "問い合わせ対応の 80%を自動化",
    "報告書作成時間を 90%短縮",
    "人件費・外注費の削減",
  ],
  qualitative: [
    "ミスゼロに近い品質",
    "業務が標準化され、引き継ぎが容易",
    "社員が“本来やるべき仕事”に集中できる",
  ],
};

// --- Technology & Security Section ---
export const TECH_SECURITY_CONTENT = {
  security: [
    "日本国内リージョンでのデータ管理",
    "権限管理（RBAC）",
    "操作ログの完全記録",
    "企業固有データの安全な隔離",
    "個人情報保護法（APPI）準拠",
  ],
  techStack: [
    "Multi-Agent Architecture",
    "Vector Memory + LLM Planner",
    "高可用性・スケーラブルな構成",
  ],
};

// --- Case Studies Section ---
export const CASE_STUDIES_CONTENT = [
  {
    industry: "IT企業",
    title: "問い合わせ対応の自動化",
    result: "80%自動化・社員の負担が大幅軽減",
  },
  {
    industry: "EC企業",
    title: "売上レポート生成を完全自動化",
    result: "マネージャーの作業時間を年間200時間削減",
  },
];

// --- Implementation Process ---
export const IMPLEMENTATION_STEPS = [
  { step: "STEP 1", title: "課題ヒアリング", duration: "無料" },
  { step: "STEP 2", title: "PoC（実証実験）", duration: "2〜4週間" },
  { step: "STEP 3", title: "本導入", duration: "トライアル可" },
  { step: "STEP 4", title: "運用サポート", duration: "改善提案" },
];

// --- Pricing Section ---
export const PRICING_CONTENT = [
  {
    name: "PoC プラン",
    target: "まずは小さく試したい企業様向け",
    description:
      "1〜2 業務に絞って、AI エージェントの効果検証を行うプランです。現場の業務をヒアリングし、プロトタイプのエージェントを構築、実データでの検証までご支援します。",
  },
  {
    name: "本導入プラン",
    target: "部門〜全社への展開を見据えた導入",
    description:
      "PoC で得られた知見をもとに、対象業務の拡大、システム連携、運用ルール整備までを含めて本番環境での定着化をご支援します。",
  },
  {
    name: "運用・改善伴走プラン",
    target: "継続的なチューニング・業務拡張",
    description:
      "導入後も、ログ分析やエラー事例の棚卸し、プロンプト・フローの改善、担当者様との定期的なレビューを通じて、AI エージェントの精度と業務範囲を継続的にアップデートします。",
  },
];

// --- Contact Section ---
export const CONTACT_CONTENT = {
  title: "人とAIが共に働く未来をつくる。",
  subtitle: "オカピＡＩエージェント株式会社は企業の知性を高め、成長を支えるパートナーです。",
  cta: {
    text: "無料相談・デモの申し込み",
    subtext: "「何が自動化できるのか知りたい」だけでも歓迎です。お気軽にご相談ください。",
  },
};
