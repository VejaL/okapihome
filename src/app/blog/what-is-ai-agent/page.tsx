import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900">
      <Header />

      <main className="flex-1 py-32 bg-white">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                Industry Insights
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
              AIエージェントとは何か？生成AIとの違いと企業へのインパクト
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-neutral-200" />
                <span className="font-medium text-neutral-900">Okapi Team</span>
              </div>
              <span>•</span>
              <time dateTime="2024-12-07">2024年12月7日</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-neutral prose-lg max-w-none">
            <p className="lead text-xl text-neutral-600 mb-8">
              生成AI（Generative AI）の普及とともに、「AIエージェント」は次の重要トレンドとして注目を集めています。
              GartnerはAIエージェントを「自律的にタスクを実行し、意思決定し、継続的に学習するシステム」と位置づけています。
              本記事では、その考え方を踏まえつつ、AIエージェントの基本概念、生成AIとの違い、そして企業にもたらす価値を整理します。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-neutral-900">
              AIエージェントとは？
            </h2>
            <p>
              AIエージェントは、単にテキストや画像を生成するだけでなく、「行動する」ことができるAIシステムです。
              従来のRPAのようにあらかじめ決められた手順だけを実行するのではなく、ある程度の
              <strong>自律性（Autonomy）</strong>
              を持ち、状況を理解しながら自らタスクを進めていきます。
            </p>
            <p>
              イメージとしては、「生成AI＝よく知っているコンサルタント」、「AIエージェント＝実際に手を動かしてくれる優秀な実務担当」と捉えると分かりやすいでしょう。
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-neutral-900">
              AIエージェントがもたらす価値
            </h2>
            <p>
              Gartnerの分析によれば、AIエージェントの導入は企業にもたらすインパクトが多岐にわたります。
              代表的なポイントを整理すると、次のようになります。
            </p>
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>
                <strong>単純な自動化を超えた「自律的な業務遂行」：</strong>
                AIエージェントは、あらかじめ決めたシナリオだけを実行するのではなく、例外やイレギュラーにも対応しながら、
                状況に応じてタスクの進め方を調整できます。
              </li>
              <li>
                <strong>イノベーションの加速：</strong>
                コンテンツ生成や資料作成、コード作成・テストなど、知的生産の一部をエージェントに任せることで、
                人はより創造的な業務に集中できます。
              </li>
              <li>
                <strong>マルチエージェントによる協調：</strong>
                役割の異なる複数のエージェントを組み合わせることで、より複雑な業務プロセスを自動化できます。
                例えば、「営業エージェント」「法務エージェント」「財務エージェント」が連携し、契約書作成〜社内承認までを一気通貫で支援するといったイメージです。
              </li>
              <li>
                <strong>データドリブンな意思決定支援：</strong>
                膨大な情報を素早く整理・要約し、意思決定に必要なポイントを提示することで、マネジメント層の判断をサポートします。
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-neutral-900">
              リスクとガバナンス：AI TRiSMの視点
            </h2>
            <p>
              一方で、高い自律性を持つAIエージェントは、新たなリスクも生み出します。
              望ましくない出力や誤った判断、データの扱い方によるコンプライアンスリスクなどです。
            </p>
            <p>
              Gartnerは、こうした課題に対応する枠組みとして
              <strong>AI TRiSM（Trust, Risk, and Security Management）</strong>
              を提唱しています。AIの信頼性・リスク・セキュリティを統合的に管理することで、安全かつ継続的な活用を実現しようとする考え方です。
            </p>
            <div className="bg-neutral-50 p-6 rounded-2xl my-6 border border-neutral-200">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">01.</span>
                  <div>
                    <strong>ガバナンス（Governance）：</strong> エージェントの権限範囲や利用目的を明確に定め、社内ルールや法令に沿った運用を行うこと。
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">02.</span>
                  <div>
                    <strong>信頼性・堅牢性（Reliability）：</strong> 出力結果を継続的にモニタリングし、ハルシネーションや誤判断を検知・抑制すること。
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">03.</span>
                  <div>
                    <strong>セキュリティ（Security）：</strong> モデルやデータに対する攻撃を防ぎ、機密情報や個人情報を保護すること。
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-neutral-900">
              まとめ：OkapiにおけるAIエージェント活用
            </h2>
            <p>
              Okapi AI Agent OS は、こうした考え方を前提に設計された「企業向けAIエージェント基盤」です。
              強力なエージェント編成（オーケストレーション）機能に加えて、
              <strong>安全性</strong> と <strong>コントロール性</strong>
              を最優先にしたアーキテクチャを採用しています。
            </p>
            <p>
              自社の業務に最適化された「デジタル人材チーム」を構築し、日々のオペレーションを任せることで、
              社員はより付加価値の高い仕事に集中できるようになります。
            </p>
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 text-center text-neutral-50">
              <h3 className="text-2xl font-semibold mb-4">
                自社に最適な AIエージェントの活用方法を知りたい方へ
              </h3>
              <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
                Okapiのデモを通じて、どの業務からAIエージェントを導入すべきか、どのように安全に運用すべきかをご提案します。
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                無料相談を予約する
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

